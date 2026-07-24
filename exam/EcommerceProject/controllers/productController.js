const Product = require("../models/Product");
const Category = require("../models/Category");
const User = require("../models/User");

// ===============================
// All Products
// ===============================
// All Products
exports.getProducts = async (req, res) => {

    try {

        const categories = await Category.find();

        let filter = {};

        if (req.query.category) {
            filter.category = req.query.category;
        }

        const products = await Product.find(filter)
            .populate("category")
            .populate("user");

        res.render("product/productList", {
            products,
            categories,
            selectedCategory: req.query.category || ""
        });

    } catch (error) {

        console.log(error);

        req.flash("error", "Unable to fetch products");

        res.redirect("/");

    }

};

// ===============================
// My Products
// ===============================
exports.getMyProducts = async (req, res) => {

    try {

        const products = await Product.find({
            user: req.user.id
        }).populate("category");

        res.render("product/myProducts", {
            products
        });

    } catch (error) {

        console.log(error);

        req.flash("error", "Unable to fetch your products");

        res.redirect("/");

    }

};

// Add Product Page
exports.addProductPage = async (req, res) => {

    try {

        const categories = await Category.find();

        res.render("product/productForm", {
            categories,
            product: null
        });

    } catch (error) {

        console.log(error);

        res.redirect("/");

    }

};

// ===============================
// Save Product
// ===============================
exports.saveProduct = async (req, res) => {

    try {

        const {
            name,
            price,
            description,
            category
        } = req.body;

        const product = new Product({

            name,
            price,
            description,
            category,

            image: req.file ? req.file.filename : "",

            user: req.user.id

        });

        await product.save();

        await User.findByIdAndUpdate(req.user.id, {
            $push: {
                products: product._id
            }
        });

        req.flash("success", "Product Added Successfully");

        res.redirect("/products");

    } catch (error) {

        console.log(error);

        req.flash("error", "Unable to save product");

        res.redirect("/product/add");

    }

};

// ===============================
// Edit Product Page
// ===============================
exports.editProductPage = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        const categories = await Category.find();

        if (!product) {

            req.flash("error", "Product Not Found");

            return res.redirect("/products");

        }

        res.render("product/productForm", {

            product,

            categories

        });

    } catch (error) {

        console.log(error);

        req.flash("error", "Something Went Wrong");

        res.redirect("/products");

    }

};

// ===============================
// Update Product
// ===============================
exports.updateProduct = async (req, res) => {

    try {

        const {
            name,
            price,
            description,
            category
        } = req.body;


        await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                price,
                description,
                category
            }
        );


        req.flash("success", "Product Updated Successfully");

        res.redirect("/products");


    } catch (error) {

        console.log(error);

        req.flash("error", "Unable to update product");

        res.redirect("/products");

    }

};

// ===============================
// Delete Product
// ===============================
exports.deleteProduct = async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        req.flash("success", "Product Deleted Successfully");

        res.redirect("/products");

    } catch (error) {

        console.log(error);

        req.flash("error", "Unable to delete product");

        res.redirect("/products");

    }

};
const Category = require("../models/Category");

// ==============================
// Category List
// ==============================
exports.getCategories = async (req, res) => {

    try {

        const categories = await Category.find();

        res.render("category/categoryList", {
            categories
        });

    } catch (error) {

        console.log(error);

        req.flash("error", "Unable to fetch categories");

        res.redirect("/");

    }

};

// ==============================
// Add Category Page
// ==============================
exports.addCategoryPage = (req, res) => {

    res.render("category/categoryForm", {
        category: null
    });

};

// ==============================
// Save Category
// ==============================
exports.saveCategory = async (req, res) => {

    try {

        const category = new Category({

            name: req.body.name

        });

        await category.save();

        req.flash("success", "Category Added Successfully");

        res.redirect("/categories");

    } catch (error) {

        console.log(error);

        req.flash("error", "Unable to Add Category");

        res.redirect("/category/add");

    }

};

// ==============================
// Edit Category Page
// ==============================
exports.editCategoryPage = async (req, res) => {

    const category = await Category.findById(req.params.id);

    res.render("category/categoryForm", {
        category
    });

};

// ==============================
// Update Category
// ==============================
exports.updateCategory = async (req, res) => {

    await Category.findByIdAndUpdate(

        req.params.id,

        {
            name: req.body.name
        }

    );

    req.flash("success", "Category Updated");

    res.redirect("/categories");

};

// ==============================
// Delete Category
// ==============================
exports.deleteCategory = async (req, res) => {

    await Category.findByIdAndDelete(req.params.id);

    req.flash("success", "Category Deleted");

    res.redirect("/categories");

};
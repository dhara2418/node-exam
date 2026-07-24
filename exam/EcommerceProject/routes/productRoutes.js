const express = require("express");

const upload = require("../middleware/upload");

const router = express.Router();

const productController = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/products", authMiddleware, productController.getProducts);

router.get("/my-products", authMiddleware, productController.getMyProducts);

router.get("/product/add", authMiddleware, productController.addProductPage);

router.post(
    "/product/add",
    authMiddleware,
    upload.single("image"),
    productController.saveProduct
);

router.get(
    "/product/edit/:id",
    authMiddleware,
    productController.editProductPage
);

router.post(
    "/product/update/:id",
    authMiddleware,
    upload.single("image"),
    productController.updateProduct
);

router.get("/product/delete/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const categoryController = require("../controllers/categoryController");

// List
router.get(
    "/categories",
    authMiddleware,
    categoryController.getCategories
);

// Add
router.get(
    "/category/add",
    authMiddleware,
    roleMiddleware("admin"),
    categoryController.addCategoryPage
);

router.post(
    "/category/add",
    authMiddleware,
    roleMiddleware("admin"),
    categoryController.saveCategory
);

// Edit
router.get(
    "/category/edit/:id",
    authMiddleware,
    roleMiddleware("admin"),
    categoryController.editCategoryPage
);

router.post(
    "/category/update/:id",
    authMiddleware,
    roleMiddleware("admin"),
    categoryController.updateCategory
);

// Delete
router.get(
    "/category/delete/:id",
    authMiddleware,
    roleMiddleware("admin"),
    categoryController.deleteCategory
);

module.exports = router;
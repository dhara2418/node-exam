const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const Product = require("./models/Product");
const Category = require("./models/Category");
require("dotenv").config();

// Database
const connectDB = require("./config/db");

// Middleware
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

// ======================
// Database Connection
// ======================
connectDB();

// ======================
// Body Parser
// ======================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ======================
// Cookie Parser
// ======================
app.use(cookieParser());

// ======================
// Method Override
// ======================
app.use(methodOverride("_method"));

// ======================
// Session
// ======================
app.use(
    session({
        secret: "ecommerce_secret",
        resave: false,
        saveUninitialized: false,
    })
);

// ======================
// Flash Messages
// ======================
app.use(flash());

// ======================
// Global User
// ======================
app.use((req, res, next) => {

    const token = req.cookies.token;

    if (token) {
        try {
            res.locals.user = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            res.locals.user = null;
        }
    } else {
        res.locals.user = null;
    }

    next();
});

// ======================
// Flash Messages
// ======================
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// ======================
// Static Folder
// ======================
app.use(express.static(path.join(__dirname, "public")));

// ======================
// View Engine
// ======================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================
// Routes
// ======================
app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/", categoryRoutes);

// ======================
// Dashboard
// ======================
app.get("/", authMiddleware, async (req, res) => {

    const totalProducts = await Product.countDocuments();

    const totalCategories = await Category.countDocuments();

    res.render("index", {
        totalProducts,
        totalCategories
    });

});


// ======================
// Admin Route
// ======================
app.get(
    "/admin",
    authMiddleware,
    roleMiddleware("admin"),
    (req, res) => {
        res.send("Welcome Admin");
    }
);

// ======================
// Profile Route
// ======================
app.get(
    "/profile",
    authMiddleware,
    roleMiddleware("admin", "user"),
    (req, res) => {
        res.send("Welcome User");
    }
);

// ======================
// Server
// ======================
const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
    console.log(`🚀 Server Running at http://localhost:${PORT}`);
});
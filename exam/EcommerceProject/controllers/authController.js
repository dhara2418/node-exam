const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Page
exports.registerPage = (req, res) => {
    res.render("auth/register");
};

// Login Page
exports.loginPage = (req, res) => {
    res.render("auth/login");
};

// Register User
exports.registerUser = async (req, res) => {
    try {

        const { username, email, password, role } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            req.flash("error", "Email already exists");
            return res.redirect("/register");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashPassword,
            role
        });

        await newUser.save();

        req.flash("success", "Registration Successful");

        res.redirect("/login");

    } catch (error) {

        console.log(error);

        req.flash("error", "Something went wrong");

        res.redirect("/register");

    }
};

// Login User
exports.loginUser = async (req, res) => {

    try {

        // console.log("====== LOGIN START ======");
        // console.log(req.body);

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        // console.log("User Found:", user);

        if (!user) {
            req.flash("error", "Invalid Email");
            return res.redirect("/login");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        // console.log("Password Match:", isMatch);

        if (!isMatch) {
            req.flash("error", "Invalid Password");
            return res.redirect("/login");
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // console.log("JWT Created");

        res.cookie("token", token, {
            httpOnly: true
        });

        // console.log("Cookie Set");

        req.flash("success", "Login Successful");

        return res.redirect("/");

    } catch (error) {
        console.log(error);
    }
};

// Logout
exports.logout = (req, res) => {

    res.clearCookie("token");

    req.flash("success", "Logout Successfully");

    res.redirect("/login");

};
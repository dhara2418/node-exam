const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        req.flash("error", "Please Login First");
        return res.redirect("/login");
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {

        req.flash("error", "Invalid Token");

        return res.redirect("/login");

    }

};

module.exports = authMiddleware;
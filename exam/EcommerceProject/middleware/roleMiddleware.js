const roleMiddleware = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {

            req.flash("error", "Access Denied");

            return res.redirect("/");
        }

        next();

    };

};

module.exports = roleMiddleware;
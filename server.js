const express = require("express");
const passport = require("passport");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

require("./auth");

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.use(
    session({
        secret: "cats",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send('<a href="/auth/google">Authenticate with Google</a>');
    const user = {};
    res.render("index", { user: user });
});

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/protected",
        failureRedirect: "/auth/failure",
    })
);

app.get("/auth/failure", (req, res) => {
    res.send("something went wrong");
});

app.get("/protected", isLoggedIn, (req, res) => {
    const user = req.user;    
    if (typeof user != undefined) {
        if (req.session.id) {
            if (typeof req.session.par != undefined || req.session.par == 0) {
                req.session.par = req.session.par ? 0 : 1;
            } 
        }
        res.render("index", { user: user, par: req.session.par });
    } else {
        res.render("/");
    }
});

app.get("/logout", (req, res) => {
    const user = {};
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.session.destroy();
        res.redirect("/");
        // res.render("index", {"user": user} );
    });
});

app.listen(5000, () => {
    console.log("listening to 5000...");
});

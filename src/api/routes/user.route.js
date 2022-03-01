module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();

    // Create a new user
    router.post("/register", users.createUser);

    app.use('/', router);
}
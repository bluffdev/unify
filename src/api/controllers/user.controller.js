const User = require("../models/users.model");

exports.createUser = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a user
    const user = new User({
      username: req.body.username,
      password: req.body.password,  
      email: req.body.email
    });

    // Save user in the database
    User.createUser(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else res.send(data);
    });
  };
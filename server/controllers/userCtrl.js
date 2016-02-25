var Restaurant = require('../models/RestaurantModel'),
    User = require('../models/UserModel'),
    jwt = require('jsonwebtoken'),
    config = require('../config/config');

module.exports = {

    register: function(req, res) {
      function regCust(req, res) {
        var newUser = new User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        newUser.password = newUser.generateHash(req.body.password);
        newUser.phone = req.body.phone;

        if (req.body.restaurantID) {
          newUser.restaurant_id = req.body.restaurantID;
          newUser.role = 'restaurant';
        }

        newUser.save(function(err, user) {
          if (err)
            res.status(500).send(err);
          else {
            var token = jwt.sign({
              id: user.id,
              name: user.name,
              role: user.role
            }, config.secretKey, { expiresIn: 3600 }); // { expiresIn: 600 } expires in 10 minutes
            res.status(200).json({
              token: token
            });
          }
        });
      }

      if (req.body.restaurantName) {
        var newRestaurant = new Restaurant();
        newRestaurant.restaurantName = req.body.restaurantName;
        newRestaurant.save(function(err, restaurant) {
          if (err)
            res.status(500).send(err);
          else
            req.body.restaurantID = restaurant._id;
            regCust(req, res);
        });
      } else {
        regCust(req, res);
      }
    },

    login: function(req, res) {
      User.findOne({ email : req.body.email }, function(err, user) {
        if (user) {
          if (!user.validPassword(req.body.password))
            res.status(401).send('Wrong password. Try again');
          else {
            var token = jwt.sign({
              id: user.id,
              name: user.name,
              role: user.role
            }, config.secretKey, { expiresIn: 3600 });
            res.status(200).json({
              token: token
            });
          }
        }
        else res.status(401).send('User not found!! !! !!');
      });
    },

    // create: function(req, res) {
    //     User.create(req.body, function(err, result) {
    //         if (err) {
    //             console.log(err);
    //             return res.status(500).send(err);
    //         }
    //         // console.log(result);
    //         return res.status(200).send(result,"successfully created user!");
    //     });
    // },

    read: function(req, res) {
        User
        .find(req.query)
        .exec(function(err,result) {
            if (err) {
                return res.status(500).send(err);
            }
            // console.log("back end working",result)
            res.send(result);
        });
    },

    update: function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },

    delete: function(req, res) {
        User.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    }

};

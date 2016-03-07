var Restaurant = require('../models/RestaurantModel'),
  Waitlist = require('../models/WaitlistModel'),
  User = require('../models/UserModel'),
  jwt = require('jsonwebtoken'),
  config = require('../config/config');

module.exports = {

  register: function (req, res) {
    function regCust(req, res) {
      if (req.body.restaurant_id) {
        req.body.role = 'restaurant';
      }
      var newUser = new User(req.body);
      newUser.password = newUser.generateHash(req.body.password);
      newUser.save(function (err, user) {
        if (err)
          res.status(500).send(err);
        else {
          var payload = user.toObject();
          var token = jwt.sign(payload, config.secretKey); // { expiresIn: 600 } expires in 10 minutes
          res.status(200).json({
            token: token
          });
        }
      });
    }

    if (req.body.restaurantName) {
      var newRestaurant = new Restaurant({ restaurantName: req.body.restaurantName });
      newRestaurant.save(function (err, restaurant) {
        if (err)
          res.status(500).send(err);
        else {
          var newWaitlist = new Waitlist({ restaurant_id: restaurant._id });
          newWaitlist.save(function (err, waitlist) {
            console.log('Waitlist saved successfully');
            Restaurant.findByIdAndUpdate(restaurant._id, { $set: { waitlist_id: waitlist._id } }, function (err, restaurant) {
              if (err)
                res.status(500).send(err);
              else {
                req.body.restaurant_id = restaurant._id;
                regCust(req, res);
              }
            });
          });
        }
      });
    } else {
      regCust(req, res);
    }
    var newUser = new User(req.body);
    newUser.password = newUser.generateHash(req.body.password);
    newUser.save(function (err, user) {
      if (err)
        res.status(500).send(err);
      else {
        var payload = user.toObject();
        var token = jwt.sign(payload, config.secretKey); // { expiresIn: 600 } expires in 10 minutes
        res.status(200).json({
          token: token
        });
      }
    });
    if (req.body.restaurantName) {
      var newRestaurant = new Restaurant({ restaurantName: req.body.restaurantName });
      newRestaurant.save(function (err, restaurant) {
        if (err)
          res.status(500).send(err);
        else {
          var newWaitlist = new Waitlist({ restaurant_id: restaurant._id });
          newWaitlist.save(function (err, waitlist) {
            console.log('Waitlist saved successfully');
          });
          req.body.restaurant_id = restaurant._id;
          regCust(req, res);
        }
      });
    } else {
      regCust(req, res);
    }
  },

  login: function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (user) {
        if (!user.validPassword(req.body.password))
          res.status(401).send('Wrong password. Try again');
        else {
          var payload = user.toObject();
          var token = jwt.sign(payload, config.secretKey, { expiresIn: 3600 });
          res.status(200).json({
            token: token
          });
        }
      }
      else res.status(401).send('User not found');
    });
  },

  read: function (req, res) {
    User
      .find(req.query)
      .exec(function (err, result) {
        if (err) {
          return res.status(500).send(err);
        }
        // console.log("back end working",result)
        res.send(result);
      });
  },

  update: function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  delete: function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  currentUser: function (req, res) {
    User
      .find({ _id: req.params.id })
      .populate('inWaitList')
      .exec(function (err, result) {
        if (err) {
          res.status(500).send('failed to find');
        } else {
          res.json(result);
        }
      });
  },

};

var User = require('../models/UserModel'),
    jwt = require('jsonwebtoken'),
    config = require('../config/config');

module.exports = {

    register: function(req, res) {
      var newUser = new User();
      newUser.name = req.body.name;
      newUser.email = req.body.email;
      newUser.password = newUser.generateHash(req.body.password);
      newUser.phone = req.body.phone;

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
            token: token,
            message: 'Registration successful'
          });
        }
      });
    },

    login: function(req, res) {
      User.findOne({ email : req.body.email }, function(err, user) {
        if (user) {
          if (!user.validPassword(req.body.password))
            res.status(400).send('Wrong password. Try again');
          else {
            var token = jwt.sign({
              id: user.id,
              name: user.name,
              role: user.role
            }, config.secretKey, { expiresIn: 3600 });
            res.status(200).json({
              token: token,
              message: 'Login successful'
            });
          }
        }
        else res.status(401).send('User not found');
      });
    },

     create: function(req, res) {
         User.create(req.body, function(err, result) {
             if (err) {
                 console.log(err);
                 return res.status(500).send(err);
             }
             // console.log(result);
             return res.status(200).send(result,"successfully created user!");
         });
     },

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
    },

    currentUser: function (req, res) {
      User
        .find({_id: req.params.id})
        .populate('inWaitList')
        .exec(function (err, result) {
          if (err) {
            res.status(500).send('failed to find');
          } else {
            res.json(result);
          }
        })
    }

};

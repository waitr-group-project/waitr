var Restaurant = require('../models/RestaurantModel');

module.exports = {
    create: function(req, res) {
        Restaurant
          .create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // console.log(result);
            return res.status(200).send(result,"successfully created Restaurant!");
        });
    },
    read: function(req, res) {
        Restaurant
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
        Restaurant
          .findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        });
    },
    delete: function(req, res) {
        Restaurant
          .findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        });
    },
  currentRestId: function (req, res) {
    Restaurant
      .find({_id: req.params.id})
      //.populate('waitlist_id')
      .exec(function (err, result) {
        if (err) {
          return res.status(500).send(err);
        } else {
          res.send(result);
        }
      });
  }

};

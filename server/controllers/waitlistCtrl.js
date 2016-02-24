var Waitlist = require('../models/WaitlistModel');

module.exports = {
    create: function(req, res) {
        Waitlist.create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // console.log(result);
            return res.status(200).send(result,"successfully created Waitlist!");
        });
    },
    read: function(req, res) {
        Waitlist
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
        Waitlist.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    delete: function(req, res) {
        Waitlist.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    }
}
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
    },
    addToList: function(req, res) {
        Waitlist.findById(req.params.id, function(err, waitList) {
            //if there is an error, don't try to update anything
            if (err) {
                return res.status(500).send(err);
            }
            waitList.list.push(req.body);
            waitList.save();
            res.send("successfully created list item");
        })
    },
    removeFromList: function(req, res) {
        Waitlist.findById(req.params.id, function(err, waitList) {
            if (err) {
                return res.status(500).send(err);
            }
            //find the position of the list item
            var pos = waitList.list.map(function(x) {
                return x._id.toString();
            }).indexOf(req.params.listId);
            
            var removed = waitList.list.splice(pos, 1);
            waitList.save();
            res.send("successfully deleted item at index " + pos);
            
        })
    }
}

var config = require('../config/config.js'),
    client = require('twilio')(config.ACCOUNT_SID, config.AUTH_TOKEN);

module.exports = {
  sendTextMessage: function (req, res) {
    client.sendMessage({
      to: req.body.phone,
      from: '+14352141519',
      body: req.body.firstName + ", your table at " + req.body.restaurant + " is now ready!"
    }, function (err, data) {
      if (err) {
        res.status(500).send('failed to send');
      } else {
        res.json(data);
      }
    });
  }
};

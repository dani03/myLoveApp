const twilio = require('twilio');

const accountSid = 'AC823024dfe3c6e42ba2abbc8dd4ce40e0';
const authToken = '9540b10b191f40263fa5e0e2212c587e';

module.exports = new twilio.Twilio(accountSid, authToken);

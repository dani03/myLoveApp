const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./createUsers');
const serviceAccount = require('./service_account.json');
const requestPassword = require('./request_password');
const verifyPassword = require('./verifiyPassword');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://myloveapp-5a592.firebaseio.com'
  });

exports.createUser = functions.https.onRequest(createUser);
exports.requestPassword = functions.https.onRequest(requestPassword);
exports.verifyPassword = functions.https.onRequest(verifyPassword);

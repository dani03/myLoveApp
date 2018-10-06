const admin = require('firebase-admin');
const twilio = require('./twilio');
module.exports = function (req, res) {
        if (!req.body.phone) {
            return res.status(422).send({ error: 'votre telephone est requis' });
        }

        const phone = String(req.body.phone).replace(/[^\d]/g, '');
        // ici nous recherchons dans la base de donnée l'utilisateur avec le numero de telephone
        admin.Auth().getUser(phone)
        .then(userRecord => {
            const code = Math.floor((Math.random() * 8999(+1000)));
            //ensuite on envoi un message a l'utilisateur
            twilio.messages.create({
                body: 'votre code est: ' + code,
                to: phone,
                from: '+33644644261'
            }, (err) => {
                if (err) { return res.status(422).send(err); }
                admin.database().ref('users/' + phone)
                .update({ Code: code, codeValid: true }, () => {
                    res.send({ success: true });
                });
            });
        })

        //dans le cas ou l'utilisateur n'est pas trouvé
        .catch((err) => {
            res.status(422).send({ error: err });
        });
};

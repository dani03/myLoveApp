const admin = require('firebase-admin');    

module.exports = function (req, res) {
 // nous allons tout d'abord verifier que
 // l'utilisateur a bien ajoute un numero de telephone
 if (!req.body.phone) {
        return res.status(422).send({ error: 'votre numero de telephone ne corespond pas' });
 }
 //ensuite on formatte le numero pour enlever tous les () et tirets et les espaces  
    const phone = String(req.body.phone).replace(/[^\d]/g, '');

 //ensuite on cree un compte utilisateur
 admin.auth().createUser({ uid: phone })
 .then(user => res.send(user))
 .catch(err => res.status(422).send({ error: err }));

 //ensuite on envoi une reponse à l'utilisateur pour la validation de son compte
};

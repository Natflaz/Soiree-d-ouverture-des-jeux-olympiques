const validator = require('validator');
exports.validateUserInput = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
/*
    if(!nom || !prenom){
        return res.status(400).send("nom et prenom sont nulles!");
    }
    if (!validator.isLength(nom, {min: 3}) || !validator.isAlpha(nom,'en-US', {ignore: " "})){
        return res.status(400).send("Format incorrect");
    }
    if (!validator.isLength(prenom, {min: 3}) || !validator.isAlpha(prenom,'en-US', {ignore: " "})){
        return res.status(400).send("Format incorrect");
    }

 */
    next();
}
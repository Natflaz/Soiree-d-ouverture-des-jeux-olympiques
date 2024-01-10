const messagerieService = require("../services/messagerie.service");


exports.getConversations = (req, res) => {
    messagerieService.getAllConversations((error, data) => {
        if (error) {
            return res.status(500).send("Internal error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}

exports.getConversationsForUser = (req, res) => {
    const id_user = req.query.id_user;
    messagerieService.getConversationsForUser(id_user,(error, data) => {
        if (error) {
            return res.status(500).send("Internal error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}

exports.getMessagesByConversation = (req, res)=>{
    const id_conversation = req.query.id_conversation;
    messagerieService.getMessagesByConversation(id_conversation,(error, data) => {
        if (error) {
            return res.status(500).send("Internal error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}

exports.sendMessage = (req, res)=>{
    const id_user = req.body.id_user;
    const id_conversation = req.body.id_conversation;
    const message = req.body.message;
    messagerieService.sendMessage(id_conversation,message,id_user,(error, data) => {
        if (error) {
            return res.status(500).send("Internal error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}
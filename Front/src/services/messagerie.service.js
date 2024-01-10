import {getRequest, postRequest} from "@/services/axios.service";

async function getAllConversations(session_id) {
    let answer = await getAllConversationsFromAPI(session_id)

    return answer
}


async function getAllConversationsFromAPI(session_id) {
    let answer = await getRequest('/messagerie/get-all-conversations?session_id='+session_id, 'GETALLCONVERSATIONS')

    return answer
}

async function getConversationsForUser(id_user,session_id) {
    let answer = await getConversationsForUserFromAPI(id_user,session_id)

    return answer
}


async function getConversationsForUserFromAPI(id_user,session_id) {
    let answer = await getRequest('/messagerie/get-conversations-for-user?id_user='+id_user+'&session_id='+session_id, 'GETALLCONVERSATIONS')
    console.log("getAllConversationsFromAPI: ", answer)
    return answer
}

async function getMessagesByConversation(id_conversation,session_id) {
    let answer = await getMessagesByConversationFromAPI(id_conversation,session_id)
    console.log("getAllConversationsFromAPI: ", answer)
    return answer
}


async function getMessagesByConversationFromAPI(id_conversation,session_id) {
    let answer = await getRequest('/messagerie/get-messages-by-conversation?id_conversation='
        +id_conversation+'&session_id='
        +session_id, 'GETMESSAGESBYCONVERSATION')
    console.log("getAllConversationsFromAPI: ", answer)
    return answer
}

async function sendMessage(body){
    const answer = await sendMessageFromAPI(body)
    console.log("answer sendmessage : "+answer)
    return answer
}

async function sendMessageFromAPI(body){
    let answer = await postRequest('/messagerie/send-message',body)
    console.log("sendMessage ", answer)
    return answer
}

export {
    getAllConversations,
    getConversationsForUser,
    getMessagesByConversation,
    sendMessage
}

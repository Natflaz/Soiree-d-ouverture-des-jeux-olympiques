import {getRequest,postRequestPicture} from "@/services/axios.service";

async function getAllStandsFromAPI() {
    let answer = await getRequest('/stands/get', 'GETALLSTANDS')
    //console.log("getAllStandsFromAPI: ", answer)
    return answer
}

async function getAllStands() {
    let answer = await getAllStandsFromAPI()
    //console.log("getAllStands: ", answer)
    return answer
}


async function uploadImageDescriptionStandFromAPI(image){
    return postRequestPicture('stands/uploading/picture-description/',image, 'UPLOADPICTUREDESCRIPTIONSTAND')
}

async function uploadImageDescriptionStand(image) {
    let answer = await uploadImageDescriptionStandFromAPI(image);
    return answer;
}

async function getStandByUserIdFromAPI(id) {
    return getRequest('/stands/get/' + id, 'GETPRESTATIONBYUSERID')
}

async function getStandByUserId(id) {
    let answer = await getStandByUserIdFromAPI(id)
    console.log("getPrestationByUserId: ", answer)
    return answer
}

export {
    getAllStands,
    uploadImageDescriptionStand,
    getStandByUserId
}
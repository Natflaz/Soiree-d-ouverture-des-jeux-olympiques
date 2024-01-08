import {deleteRequest, getRequest, patchRequest, postRequest} from "@/services/axios.service";

async function getAllAreasFromAPI() {
    let answer = await getRequest('/map/get-all-areas', 'GETALLAREAS')
    //console.log("getAllAreasFromAPI: ", answer)
    return answer
}

async function getAllAreas() {
    let answer = await getAllAreasFromAPI()
    //console.log("getAllAreas: ", answer)
    return answer
}

async function updateAreaFromAPI(id, body) {
    return patchRequest('/map/update-area/' + id, body, 'UPDATEAREA')
}

async function updateArea(id, body) {
    let answer = await updateAreaFromAPI(id, body)
    //console.log("updateArea: ", answer)
    return answer
}

async function createAreaFromAPI(body) {
    let answer = await postRequest('/map/create-area', body, 'CREATEAREA')
    //console.log("createAreaFromAPI: ", answer)
    return answer
}

async function createArea(body) {
    let answer = await createAreaFromAPI(body)
    //console.log("createArea: ", answer)
    return answer
}

async function deleteAreaFromAPI(id) {
    console.log("deleteArea2: ", id)
    return deleteRequest('/map/delete-area/' + id, 'DELETEAREA')
}

async function deleteArea(id) {
    console.log("deleteArea1: ", id)
    let answer = await deleteAreaFromAPI(id)
    //console.log("deleteArea: ", answer)
    return answer
}

async function getAllZonesFromAPI(session_id) {
    return getRequest('/map/get-all-zones?session_id='+session_id, 'GETALLZONES')
}

async function getAllZones(session_id) {
    let answer = await getAllZonesFromAPI(session_id)
    //console.log("getAllZones: ", answer)
    return answer
}

async function getZoneByIdFromAPI(id,session_id) {
    return getRequest('/map/get-zone?id_zone=' + id+"&session_id="+session_id, 'GETZONEBYID')
}

async function getZoneById(id,session_id) {
    let answer = await getZoneByIdFromAPI(id,session_id)
    //console.log("getZoneById: ", answer)
    return answer
}

async function updateZoneFromAPI(id, body) {
    console.log("updateZoneFromAPI: ", id, body)
    return patchRequest('/map/update-zone/' + id, body, 'UPDATEZONE')
}

async function updateZone(id, body) {
    let answer = await updateZoneFromAPI(id, body)
    //console.log("updateZone: ", answer)
    return answer
}

async function createZoneFromAPI(body) {
    return postRequest('/map/create-zone', body, 'CREATEZONE')
}

async function createZone(body) {
    let answer = await createZoneFromAPI(body)
    //console.log("createZone: ", answer)
    return answer
}

async function deleteZoneFromAPI(id,session_id) {
    //console.log("deleteZoneFromAPI: ", id)
    return deleteRequest('/map/delete-zone?id=' + id+"&session_id="+session_id, 'DELETEZONE')
}

async function deleteZone(id,session_id) {
    let answer = await deleteZoneFromAPI(id,session_id)
    //console.log("deleteZone: ", answer)
    return answer
}

async function getAllTypeZonesFromAPI() {
    return getRequest('/map/get-all-type-zones', 'GETALLTYPEZONE')
}

async function getAllTypeZones() {
    let answer = await getAllTypeZonesFromAPI()
    //console.log("getAllTypeZone: ", answer)
    return answer
}

export {
    getAllAreas,
    getAllZones,
    getAllTypeZones,
    updateZone,
    createZone,
    deleteZone,
    getZoneById,
    updateArea,
    createArea,
    deleteArea
}
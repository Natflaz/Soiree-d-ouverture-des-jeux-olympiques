import {deleteRequest, getRequest, patchRequest, postRequest} from "@/services/axios.service";

async function getAllAreasFromAPI() {
    let answer = await getRequest('/map/areas', 'GETALLAREAS')
    //console.log("getAllAreasFromAPI: ", answer)
    return answer
}

async function getAllAreas() {
    let answer = await getAllAreasFromAPI()
    //console.log("getAllAreas: ", answer)
    return answer
}

async function updateAreaFromAPI(id, body) {
    return patchRequest('/map/area/' + id, body, 'UPDATEAREA')
}

async function updateArea(id, body) {
    let answer = await updateAreaFromAPI(id, body)
    //console.log("updateArea: ", answer)
    return answer
}

async function createAreaFromAPI(body) {
    let answer = await postRequest('/map/area', body, 'CREATEAREA')
    console.log("createAreaFromAPI: ", answer)
    return answer
}

async function createArea(body) {
    let answer = await createAreaFromAPI(body)
    console.log("createArea: ", answer)
    return answer
}

async function deleteAreaFromAPI(id) {
    return deleteRequest('/map/area/' + id, 'DELETEAREA')
}

async function deleteArea(id) {
    let answer = await deleteAreaFromAPI(id)
    console.log("deleteArea: ", answer)
    return answer
}

async function getAllZonesFromAPI() {
    return getRequest('/map/zones', 'GETALLZONES')
}

async function getAllZones() {
    let answer = await getAllZonesFromAPI()
    //console.log("getAllZones: ", answer)
    return answer
}

async function getZoneByIdFromAPI(id) {
    return getRequest('/map/zone?id_zone=' + id, 'GETZONEBYID')
}

async function getZoneById(id) {
    let answer = await getZoneByIdFromAPI(id)
    //console.log("getZoneById: ", answer)
    return answer
}

async function getAllTypeZoneFromAPI() {
    return getRequest('/map/typeZones', 'GETALLTYPEZONE')
}

async function getAllTypeZone() {
    let answer = await getAllTypeZoneFromAPI()
    //console.log("getAllTypeZone: ", answer)
    return answer
}

export {
    getAllAreas,
    getAllZones,
    getAllTypeZone,
    getZoneById,
    updateArea,
    createArea,
    deleteArea
}
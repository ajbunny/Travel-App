//ALL OF OUR ENDPOINTS
import axios from 'axios';
const lodgingURL = 'http://localhost:3001/lodging'
const locationURL = 'http://localhost:3001/location'
const attractURL = 'http://localhost:3001/attract'

//#region LODGING ROUTES
export const getLodge = (id) => {
    const URL = `${lodgingURL}/${id}`
    const response = axios.get(URL)
    return response
}
//SHOW TODO
export const getLodgesss = (id) => {
    const URL = `${lodgingURL}/${id}`
    const response = axios.get(URL)
    return response
}
//EDIT LODGE
export const editLodge = (id, updatedLodge) => {
    const URL = `${lodgingURL}/${id}`;
    const response = axios.put(URL, updatedLodge)
    return response
}

// CREATE THE lodge (new lodge)
export const NewLodge = (lodge) => {
    const URL = lodgingURL
    const response =axios.post(URL, lodge)
    return response
}
//DELETE THE LODGE
export const deleteLodge = (id) => {
    const URL = `${lodgingURL}/${id}`
    const response =axios.delete(URL)
    return response
}
//#endregion

//#region LOCATION ROUTES
export const getLocation = (id) => {
    const URL = `${locationURL}/${id}`
    const response = axios.get(URL)
    return response
}
//SHOW LOCATION
export const getLocationsss = (id) => {
    const URL = `${locationURL}/${id}`
    const response = axios.get(URL)
    return response
}
//EDIT LOCATION
export const editLocation = (id, updatedLocation) => {
    const URL = `${locationURL}/${id}`;
    const response = axios.put(URL, updatedLocation)
    return response
}

// CREATE THE LOCATION 
export const NewLocation = (lodge) => {
    const URL = locationURL
    const response =axios.post(URL, lodge)
    return response
}
//DELETE THE LOCATION
export const deleteLocation = (id) => {
    const URL = `${locationURL}/${id}`
    const response =axios.delete(URL)
    return response
}
//#endregion

//#region ATTRACTIONS ROUTES
export const getAttraction = (id) => {
    const URL = `${attractURL}/${id}`
    const response = axios.get(URL)
    return response
}
//SHOW ATTRACTIONS
export const getAttractionsss = (id) => {
    const URL = `${attractURL}/${id}`
    const response = axios.get(URL)
    return response
}
//EDIT ATTRACTIONS
export const editAttraction = (id, updatedAttraction) => {
    const URL = `${attractURL}/${id}`;
    const response = axios.put(URL, updatedAttraction)
    return response
}

// CREATE THE ATTRACTIONS
export const NewAttraction = (lodge) => {
    const URL = attractURL
    const response =axios.post(URL, lodge)
    return response
}
//DELETE THE ATTRACTIONS
export const deleteAttraction = (id) => {
    const URL = `${attractURL}/${id}`
    const response =axios.delete(URL)
    return response
}
//#endregion
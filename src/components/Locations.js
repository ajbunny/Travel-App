import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLocationsss } from "../services/booking-api"

export default function Locations() {
    //setting up main page???
    const nav = useNavigate()
    //destructuring the id parameter 
    const { id } = useParams()
    //setting up our state
    const [location, setLocation] = useState([])
    useEffect(() => {
        getLocationsss(id)// SHOULD be grabbing from the lodging "api"
        .then(res => setLocation(res.location))
    }, [])

    const deleteLocation= () => {
        //delete function goes here
        deleteLocation(id)
        //navigate back to the main page
        nav('/')
    }

    return (
        <div>
            <h3>Location: {location.location}</h3>
            <h4>Attraction: {location.attraction}</h4>
            <h4>Lodging: {location.lodging}</h4>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteLocation}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button>
        </div>
    )
}
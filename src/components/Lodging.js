import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLodgesss } from "../services/booking-api"


export default function Lodging() {
    //setting up main page???
        const nav = useNavigate()
    //destructuring the id parameter 
    const { id } = useParams()
    //setting up our state
    const [lodge, setLodge] = useState([])
    useEffect(() => {
        getLodgesss(id)// SHOULD be grabbing from the lodging "api"
        .then(res => setLodge(res.lodge))
    }, [])

    const deleteLodge= () => {
        //delete function goes here
        deleteLodge(id)
        //navigate back to the main page
        nav('/')
    }

    return (
        <div>
            <h3>Lodging: {lodge.name}</h3>
            <h4>Address: {lodge.address}</h4>
            <h4>Price: {lodge.price}</h4>
            <h4>Person Limit: {lodge.personlimit}</h4>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteLodge}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button>
        </div>
    )
}
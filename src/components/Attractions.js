import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAttractionsss } from "../services/booking-api"

//THIS NEEDS EXPLAINED TO ME
//DATA ISN OT POPULATING
export default function Attracts() {
    //setting up main page???
    const nav = useNavigate()
    //destructuring the id parameter 
    const { id } = useParams()
    //setting up our state
    const [attract, setAttract] = useState([])
    useEffect(() => {
        getAttractionsss(id)// SHOULD be grabbing from the lodging "api"
        .then(res => setAttract(res.attract))
    }, [])

    const deleteAttract= () => {
        //delete function goes here
        deleteAttract(id)
        //navigate back to the main page
        nav('/')
    }

    return (
        <div>
            <h3>Name: {attract.name}</h3>
            <h4>Address: {attract.address}</h4>
            <h4>Price: {attract.price}</h4>
           
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteAttract}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button>
        </div>
    )
}
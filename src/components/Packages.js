import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLodgesss, getLocationsss, getAttractionsss } from "../services/booking-api";

export default function Packages() {
    const { id } = useParams()
    const nav = useNavigate()
    const [data, setData] =useState({null})
}

//DAZED AND CONFUSED....DONT KNOW WHAT ANY OF THIS MEANS
useEffect(() => {
    getTodo(id)// getting the todo that matches this is
    .then(res => setData(res.data))
}, [])

//NEED TO CREATE FORM FOR PACKAGE...BUT HOOOWW?
return (
    <div>
        <form onSubmit={search}>
            Location: <select>
                <option value="" disabled selected hidden> Select a  Location</option>
            <option value="Spain">Spain</option>
//         <option value="Kenya">Kenya</option>
//         <option value="Egypt">Egypt</option>
//         <option value="Mexico">Mexico</option>
//         <option value="China">China</option>
//         <option value="United Kindom">United Kingdom</option>
//         <option value="Costa Rica">Costa Rica</option>
//         <option value="Aruba">Aruba</option>
            </select>
            Attractions: <select>
            <option value="" disabled selected hidden> Select a  Attraction</option>
            </select>

            Lodging: <select>
            <option value="" disabled selected hidden> Select Loddging</option>
            </select>
        </form>
    </div>
)



// Category: <select name="category">
//         <option value="" disabled selected hidden>Select a Category...</option>
//         <option value="Book">Book</option>
//         <option value="Series">Series</option>
//         <option value="Movie">Movie</option>
//         </select> <br />
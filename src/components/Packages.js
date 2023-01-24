import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getLodgesss,
  getLocationsss,
  getAttractionsss,
} from "../services/booking-api";

export default function Packages() {
  const { id } = useParams();
  const nav = useNavigate();
  const [pack, setPack] = useState({});

  //NOT SURE WHAT THIS DOES BUT WE'RE GONNA TRY IT
  const searchAttract = (e) => {
    //e
    const userPackage = {
      name: e.target.name.value,
      address: e.target.address.value,
      price: e.target.price.value,
    };
    getAttractionsss(userPackage);
    nav("/");
  };
  const searchLocation = (e) => {
    const userPackage = {
      location: e.target.Location.value,
      attractions: e.target.attractions.value,
      lodging: e.target.lodging.value,
    };
    getLocationsss(userPackage);
    nav("/");
  };
  const searchLodging = (e) => {
    const userPackage = {
      name: e.target.name.value,
      address: e.target.address.value,
      price: e.target.price.value,
    };
    getLodgesss(userPackage);
    nav("/");
  };
  //DAZED AND CONFUSED....DONT KNOW WHAT ANY OF THIS MEANS
  //#region //LOCATION DATA
  //LOCATION DATA
  useEffect(() => {
    getLocationsss(id) // getting the todo that matches this is
      .then((res) => setPack(res.pack));
  }, []);
  //LODGING DATA
  useEffect(() => {
    getLodgesss(id) // getting the todo that matches this is
      .then((res) => setPack(res.pack));
  }, []);
  // ATTRACTIONS DATA
  useEffect(() => {
    getAttractionsss(id) // getting the todo that matches this is
      .then((res) => setPack(res.pack));
  }, []);
  //#endregion

  //NEED TO CREATE FORM FOR PACKAGE...BUT HOOOWW?
  //update: ATTEMPTED PACKAGE FORM BUT NOT SURE IT'S RIGHT
//#region 
  return (
    <div>
      <form onSubmit={searchAttract}>
        Location:{" "}
        <select>
          <option value="" disabled selected hidden>
            {" "}
            Select a Location
          </option>
          <option value="Spain">Spain</option>
          // <option value="Kenya">Kenya</option>
          // <option value="Egypt">Egypt</option>
          // <option value="Mexico">Mexico</option>
          // <option value="China">China</option>
          // <option value="United Kindom">United Kingdom</option>
          // <option value="Costa Rica">Costa Rica</option>
          // <option value="Aruba">Aruba</option>
        </select>
        Attractions:{" "}
        <select>
          <option value="" disabled selected hidden>
            {" "}
            Select a Attraction
          </option>
          <option value="Sangrada Familia">Sangrada Familia</option>
          <option value="Flamenco Show">Flamenco Show</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Masai Mara">Masai Mara</option>
          <option value="Pyramids">Pyramids</option>
          <option value="Frida Kahlo">Frida Kahlo </option>
          <option value="Great Wall">Great Wall</option>
          <option value="Big Ben">Big Ben</option>
          <option value="Arenal Volcano">Arenal Volcano</option>
          <option value="Conchi Natural Pool">Conchi Natural Pool</option>
        </select>
        Lodging:{" "}
        <select>
          <option value="" disabled selected hidden>
            {" "}
            Select Loddging
          </option>
          <option value="Happy Hotel">Happy Hotel</option>
          <option value="Sweet Airbnb">Sweet Airbnb</option>
          <option value="Fun-Time Hostel">Fun-Time Hostel</option>
        </select>
       
        {/* DO I NEED TO CREATE A NEW ROUTE FOR THIS IN MY BOOKING-API??? 
            <button onClick={deleteuserPackage}>Delete</button> */}
        <button
          onClick={() => { nav("/");    }}
        >
          Main
        </button>
      </form>
    </div>
  );
  //#endregion
}

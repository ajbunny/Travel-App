import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Packages from "./Packages";
import { getLodgesss, getLocationsss, getAttractionsss } from "../services/booking-api";

export default function Navi() {
   <div>
<Link to="/packages">Packages</Link>
<Link to="/locations">Locations</Link>
<Link to="/attract">Attractions</Link>
<Link to="/lodging">Lodging</Link>
 </div> 
}
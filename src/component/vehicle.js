import React, { useState, useEffect } from "react";
import Audit from './auditType'
import axios from "axios";
import './auditType.css'
const Vehicles = ({unclicked}) => {
  const [vehicle, setVehicle] = useState([]);
  const [query,setQuery]=useState("");
  const [clicked,setClick]=useState("");
  const click =()=>{
    console.log("ok");
    return(
      setClick("ok")
    )
  }
  const unclick =()=>{
    return(
      setClick("")
    )
  }

  const url =`http://88.198.119.158:8080/operation-audit/vehicles/search?q=${query}`
  const inputchange=(e)=>{
    setQuery(e.target.value);
  };
  const getData =async ()=>{
    const result =await axios.get(url);
    setVehicle(result.data.vehiclePlateNo);

  }
  const inputSubmit=(e)=>{
    e.preventDefault();
    getData();
  }

  useEffect(() => {
    axios
      .get("http://88.198.119.158:8080/operation-audit/vehicles")
      .then((res) => {
        setVehicle(res.data);
      });
  }, []);
  const allVechile = vehicle.map((vehItem) => {
    return (
      <div className="v-containet" onClick={click} key={vehItem.vehicleId}>
        <h3 className="h-vehicle">{vehItem.vehiclePlateNo}</h3>
      </div>
    );
  });
  return (
    <div>
    {
      clicked !=""?
      <Audit unclicked={unclick}/> :
    <div className="vehicle">
      <div className="v-nav">
        <h1 className="Vehicles"> Vehicles </h1>
        <button onClick={unclicked} className="back"> Back </button>
      </div>
      <div >
        <input type="search" onChange={inputchange} value={query} placeholder="Search ... " className="search"/>
        <button className="btn-search" onSubmit={inputSubmit}> Search </button>
        {allVechile}
      </div>
      </div>
}
    </div>
  );
};
export default Vehicles;

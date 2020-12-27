import React ,{useState,useEffect} from "react"; 
import axios from 'axios';
import Vehicles from './vehicle'
import './vehicle.css'

const Home = ({user,log}) => {
  const [clicked,setClick]=useState("");
  const [audit,setAudit]=useState([]);
  const click =()=>{
    return(
      setClick("ok")
    )
  }
  const unclick =()=>{
    return(
      setClick("")
    )
  }
  useEffect(()=>{
    axios.get('http://88.198.119.158:8080/operation-audit/types',{headers: {"Access-Control-Allow-Origin": "*"}}).then((res)=>{
      setAudit(res.data);
    })
  },[]);
  const allAudit=audit.map(audItem=>{
    return(
    <div id={audItem.id} className="mainAudit" onClick={click}>
      <h3 className="audit-name">{audItem.name}</h3>
      </div>
    )
  })
  console.log(allAudit);
  return (
    <div className="home">
      {     
        clicked != ""  ?
        <Vehicles unclicked={unclick} /> :
      <div>
      <div className="nav">
        <h1 className="audit"> Audit Types </h1>
        <button type="button" onClick={log} className="btn1 btn-dark">LogOut</button>
      </div>
      {allAudit}
      </div>
      }
    </div>
  );
};
export default Home;

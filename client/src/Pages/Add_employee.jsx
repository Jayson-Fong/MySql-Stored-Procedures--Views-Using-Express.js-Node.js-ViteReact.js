import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Table from "../Components/Table/Table"

function Add_employee() {
    const [ip_id, setIpId] = useState("");
    const [ip_tag, setIpTag] = useState(0);
    const [ip_fuel, setIpFuel] = useState(0);
    const [ip_capacity, setIpCapacity] = useState(0);
    const [ip_sales, setIpSales] = useState(0);
    const [ip_flown_by, setIpFlownBy] = useState("");
    const [drones, setDrones] = useState([]);
    const [notification, setNotification] = useState("");
    const colNames = ["ID", "Tag", "Fuel", "Capacity", "Sales", "Flown By"];


    
    const addDrone = () => {
  
      if(ip_id.length > 0 && ip_tag !== 0 && ip_capacity !== 0 && ip_sales !== 0
         && ip_flown_by.length > 0 && ip_fuel !== 0){
          Axios.post("http://localhost:3001/add_drone", {
            ip_id : ip_id,
            ip_tag : ip_tag,
            ip_fuel : ip_fuel,
            ip_capacity : ip_capacity,
            ip_sales : ip_sales,
            ip_flown_by : ip_flown_by,
          }).then((res) => {
              setNotification(res.data.message)
          });
      } else {
        setNotification("One of your field(s) is empty");
      }
  
    };
  
    const getDrones = () => {
      Axios.get("http://localhost:3001/add_drone").then((response) => {
        setDrones(response.data);
      });
    };
  

 
    return (
      <>
        <div className="App">
          <text >  Drones </text>
          <h1>{notification}</h1>
          <div className="information">
            <label>{colNames[0]}:</label>
            <input
              type="text"
              onChange={(event) => {
                setIpId(event.target.value);
              }}
            />
            <label>{colNames[1]}:</label>
            <input
              type="number"
              onChange={(event) => {
                setIpTag(event.target.value);
              }}
            />
            <label>{colNames[2]}:</label>
            <input
              type="number"
              onChange={(event) => {
                setIpFuel(event.target.value);
              }}
            />
            <label>{colNames[3]}:</label>
            <input
              type="number"
              onChange={(event) => {
                setIpCapacity(event.target.value);
              }}
            />
            <label>{colNames[4]}:</label>
            <input
              type="number"
              onChange={(event) => {
                setIpSales(event.target.value);
              }}
            />
            <label>{colNames[5]}:</label>
            <input
              type="text"
              onChange={(event) => {
                setIpFlownBy(event.target.value);
              }}
            />
            <button onClick={addDrone}>Add Drone</button>
          </div>
          <div className="employees">
            <button onClick={getDrones}>Show Drones</button>
              
  
            {/*pilots.map((val, key) => {
              return (
                <div className="employee">
                  <div>
                    <h3>Username: {val.username}</h3>
                    <h3>LicenseID: {val.licenseID}</h3>
                    <h3>PilotExperiencee: {val.experience}</h3>
                  </div>
                </div>
              );
            })*/}
          </div>
      </div>
      <Table list={drones}/>
      </>
    );  
  }
export default Add_employee;
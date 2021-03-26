import React from "react";
import { useState, useEffect } from "react";
import "./css/style.css";

const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
       const fetchApi = async () => {
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=889ea6bd69d77912b64ef0e4be0e60e4`
           const response = await fetch(url);
           const resJson = await response.json();
           console.log(resJson);
           setCity(resJson.main);
       };

       fetchApi();
    }, [search])

    return (
        <>
           <div className="box">
               <div className="inputData">
                   <input
                       type="search"
                       value={search}
                       className="inputField"
                       onChange = { (event) => {
                           setSearch(event.target.value)
                       }}
                   />
               </div> 

            {
                !city ? (
                   <> 
                    <h1 className="errorMsg"> Error 404 </h1> 
                    <h2 className="errorMsg"> Oopsss!! No such city found.😒 </h2>
                    <h2 className="errorMsg"> Please try again!! 😄</h2>
                   </> 
                ) : (
                   <div>
                    <div className="info">
                      <h2 className="location">
                      <i className="fas fa-street-view"></i>{search}
                      </h2>
                      <h1 className="temp">
                          {city.temp}° C
                      </h1>
                      <h2 className="tempmin_max">
                        <>
                         Min : {city.temp_min}° C   ||   Max :  {city.temp_max}° C
                         <br/>
                         Pressure : {city.pressure} hPa || Humidity : {city.humidity} %
                         </>
                      </h2>
                     </div>
                      <div className="wave -one"></div>
                      <div className="wave -two"></div>
                      <div className="wave -three"></div> 
                   </div>
                )
            }   

           </div>
        </>
    )
}

export default TempApp;
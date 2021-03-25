import React from "react";
import { useState, useEffect } from "react";
import "./css/style.css";

const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
       const fetchApi = async () => {
           const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=889ea6bd69d77912b64ef0e4be0e60e4`
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
                    <p className="errorMsg"> Oopsss!!....No such city found.😒 </p>
                    <p className="errorMsg"> Please try again!! 😄</p>
                   </> 
                ) : (
                   <div>
                    <div className="info">
                      <h2 className="location">
                      <i className="fas fa-street-view"></i>{search}
                      </h2>
                      <h1 className="temp">
                          {city.temp} deg Cel
                      </h1>
                      <h2 className="tempmin_max">
                        <>
                         Min : {city.temp_min} deg Cel || Max :  {city.temp_max} deg Cel
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
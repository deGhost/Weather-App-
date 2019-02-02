import React from 'react'

const Weather = (props) =>{
    return(
        <div>
        {
            props.city && props.country &&
            <p>Location:{props.city}, {props.country} </p> }
        
        {
            props.temperature &&
            <p>temperature:
        {
            props.temperature} °C</p> 
        }

        {
            props.humidity && <p> Humidity:
        {
            props.humidity}</p>
       }
       {
            props.description && <p>Condtions: {props.description}</p>
       }
       {
            props.wind && <p>Wind: {props.wind} KM/H</p>
        }
        {
            props.error && <p> {props.error}</p>
        }
        </div>
    );
}



export default Weather;
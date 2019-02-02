import React from 'react'

class Weather extends React.Component{

    render(){
        return(
            <div>
            {
                this.props.city && this.props.country &&
                <p>Location:{this.props.city}, {this.props.country} </p> }
            
            {
                this.props.temperature &&
                <p>temperature:
            {
                this.props.temperature} °C</p> 
            }

            {
                this.props.humidity && <p> Humidity:
            {
                this.props.humidity}</p>
           }
           {
                this.props.description && <p>Condtions: {this.props.description}</p>
           }
           {
                this.props.wind && <p>Wind: {this.props.wind} KM/H</p>
            }
            {
                this.props.error && <p> {this.props.error}</p>
            }
            </div>
        );
    }
}


export default Weather;
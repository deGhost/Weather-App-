import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
const API_KEY = "81e1fc9493f44bc5da1e278a7d4861be";


class App extends React.Component {
//init the state
state={
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined

}




  //for http calls, fetch is an api
  

  getWeather= async(e)=>{
  e.preventDefault();
  const city = e.target.elements.city.value;  
  const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`); 

    const data = await api_call.json();
    if(city  && country){
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city:data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description:data.weather[0].description,
        wind:data.wind.speed,
        error:""
      });
  
    }else{
      console.log(data);

      this.setState({
        temperature: undefined,
        city:undefined,
        country: undefined,
        humidity: undefined,
        description:undefined,
        wind:undefined,
        error:"Please enter city and country."
      });
  
    }

  }
  render(){
    return(
      <div>
        <Titles/>
        <Form getWeather ={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        wind={this.state.wind}
        error= {this.state.error}

        />
      </div>
    );
  }
}

//making the component available to import for other files
export default App;
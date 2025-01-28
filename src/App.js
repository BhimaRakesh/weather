import React,{useState} from 'react'
import "./App.css"
const App = () => {
  const [city ,setCity]=useState(" ")
  const [resultInCelcius ,setResultInCelcius]=useState(" ")
const [resultinKelvin ,setResultInKelvin] =useState("")
  const changeHandler =(e)=>{
setCity(e.target.value)
  }
  const celciusHandler =(e)=>{
e.preventDefault()
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
  response => response.json()).then(data=>{
    const kelvin = data.main.temp
    const celcius = kelvin - 273.15 ;
    console.log(kelvin)
    setResultInCelcius("Temapareture in "+city+" "+Math.round(celcius)+" °C")
  }
  ).catch(error => console.log(error))
  setCity("");

  }
  const kelvinHandler =(e)=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response =>response.json()).then(
        data => {
        const kelvin =data.main.temp
        setResultInKelvin("Temapareture in " +city+" "+Math.round(kelvin)+" k")
      }).catch(error =>console.log(error))
      setCity("")
    
  }
  return (
    <div className='card'>
      <center>
      
      <h2>weather-Reporter</h2>
      <input type="text" onChange={changeHandler} value={city} name="city" /><br/>
      <button onClick={celciusHandler}>temp get in celcius </button><br/>
      <button onClick={kelvinHandler}>tempareture in kelvin</button>




</center>
{resultInCelcius}<br></br>
{resultinKelvin}
    </div>
  )
}

export default App

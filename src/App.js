import React,{useState} from 'react'
import "./App.css"
const App = () => {

  const [city ,setCity]=useState("")
const [result ,setResult]=useState("")
    const changeHandler =(e)=>{
setCity (e.target.value)
  }

  const submitHandler = (e)=>{
   e.preventDefault()
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then( 
response => response.json()).then(data => {
  const kelvin = data.main.temp
  const celcius = kelvin - 273;
  console.log(kelvin)
  console.log(celcius)
  setResult("Temperature at "+city+Math.round(celcius)+"°C")
}

)
  }

  return (
    <div className='card'>
      <center>
      <h1>Weather reporter</h1>
      {result}
      <form onSubmit={submitHandler}>
      <input type ="text" name="city" onChange={changeHandler} value = {city} placeholder='enter city'/>
      <input type ="submit" value="get tempareture"/>
      </form>
</center>
    </div>
    
  )
}

export default App

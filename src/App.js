import logo from './logo.svg';
import './App.css';
import Styled from "styled-components"
import City from './Components/City';
import Weather from './Components/Weather';
import { useState } from 'react';
import Axios from "axios";
const Container = Styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
width:500px;
height:500px;
background:white
`;
const AppLabel = Styled.span`
color:black;
font-size:18px;
font-weight:bold;
`
// const API_KEY="fe4feefa8543e06d4f3c66d92c61b69c"
function App() {
  const [city,updateCity]=useState();
  const [weather,updateWeather]=useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data)
  }
  return (
    <Container>
        <AppLabel>
          Weather Predction
        </AppLabel>
        {
          weather ? (
           <Weather weather={weather}/>
          ):(
            <City updateCity={updateCity} fetchWeather={fetchWeather}/>
          )
        }
    
      {/* <Weather/> */}
    </Container>
  );
}

export default App;

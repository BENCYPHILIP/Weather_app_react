import React from 'react'
import Styled from "styled-components"
import LogoImg from "../assets/images/logo.png"
import { FaSun,FaArrowAltCircleRight,FaBrain,FaWind} from 'react-icons/fa';

const WeatherCondition=Styled.div`
display:flex;
flex-ditrection:row;
align-items:center;
justify-content;space-between;
width:100%;
margin:30px auto;

`
const Condition=Styled.span`
margin:20px auto;
font-size:14px;
& span
{
  font-size:28px;
}
`
const ImgLogo = Styled.img`
width:140px;
height:140px;
margin:5px auto;
`
const Loaction=Styled.span`
font-size:28px;
font-weight:bold
`
const Weatherinfo=Styled.span`
font-size:14px;
font-weight:bold;
text-align:start;
margin:20px 25px 10px;
width:90%;
`
const InfoConatiner=Styled.span`
    display:flex;
    margin:5px 10px;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;

`

const WeatherIcon = Styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = Styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = Styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = Styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = Styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = Styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent =(props)=>

{
  const {name,value}=props;
  return(
    <InfoContainer>
      {/* <InfoIcon  /> */}
    {
       name === 'Sunrise'? <FaSun/>:
       name === 'Humidity'? <FaBrain />  :
       name === 'Wind'?<FaWind/>:
       name === 'Pressure'?<FaArrowAltCircleRight/>:
       null
    }
     
      <InfoLabel>
     {value}
     <span>
       {name}
     </span>
      </InfoLabel>
    </InfoContainer>
  )
}
const Weather = (props) => {
  const {weather} =props;
  const getTime=(timestamp)=>
  {
    return `${new Date(timestamp * 1000).getHours()}:${new Date(timestamp * 1000).getMinutes()}`
  }
  return (
    <>
     <WeatherCondition>
      <Condition>
        <span>
          {`${Math.floor(weather?.main?.temp - 273 )}°C`}
          </span> {`| ${weather?.weather[0].description}`}
      </Condition>
      <ImgLogo src={LogoImg}/>
      
      </WeatherCondition> 
      <Loaction>
        {`${weather?.name},${weather?.sys?.country}`}
      </Loaction>
      <Weatherinfo>
        Weather Info
      </Weatherinfo>
      <WeatherInfoContainer>
        <WeatherInfoComponent name="Sunrise" value={getTime(weather?.sys?.sunrise)}/>
        <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity}/>
        <WeatherInfoComponent name="Wind" value={weather?.wind?.speed}/>
        <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure}/>
      </WeatherInfoContainer>
    </>
  )
}

export default Weather;

import React from 'react'
import Styled from "styled-components"
import LogoImg from "../assets/images/logo.png"
const ImgLogo = Styled.img`
width:140px;
height:140px;
padding:50px;
`
const Label=Styled.span`
color:black;
font-size:18px;
font-weight:bold;
marign:0px auto;
`
const SearchBox=Styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;
& input{
  padding:10px;
  border:none;
  font-size:14px;
  outline:none;
  font-weight:bold;
}
& button{
  padding:10px;
  border:none;
  font-size:14px;
  outline:none;
  color:white;
  background-color:black;
  font-weight:bold;
  cursor:pointer;
  font-weight:bold;
}
`


const City = (props) => {
  const {updateCity,fetchWeather} = props;
  return (
    <>
   <ImgLogo src={LogoImg}/>
   <Label>Find Weather In Your City</Label>
   <SearchBox onSubmit={fetchWeather}>
   <input type="text" placeholder='Search Place' onChange={
     (e)=>
     {
       updateCity(e.target.value)
     }
     }/>
   <button type="submit">Search</button>
   </SearchBox>
 
    {/* <Logo src={LogoImg} alt="logo"/> */}
    </>
  )
}

export default City

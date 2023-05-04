import React, { useState } from 'react';
import styled from 'styled-components';
import profil from './assets/profil.png';
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Footer from './Footer';
import logo from './assets/logo.png';


const LogoContainer = styled.div`
  max-width: 3.5rem;
  grid-area: logo;
  padding-top: 25px;
  padding-left:20px;
`;

const StyledImg = styled.img`
  width: 70%;
`;

const MainContainer = styled.div`
  grid-area: main;
`;

const HomeContainer =styled.div`
height: 680px;
width: vw;
background-color: #ffffff;
display:flex;
border-bottom: 1px solid black;
margin:auto;
justify-content: space-around;
align-items: center;
`
const TextContainerHome = styled.div`
height: 500px;
width: 450px;
background-color: #ffffff;
font-family: 'Montserrat';
font-size: 40px;
margin-left:400px;
`;

const StyleImgHome = styled.img`
height: 480px;
width: 370px;
margin-top:50px;
`;







const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "logo top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;

function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar />
        <MainContainer>
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/projects">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
          <HomeContainer>
             <TextContainerHome><h1>I’m Josefin
              Berntsson.</h1> <h4>UX/UI Designer with front-end knowledge</h4>
             </TextContainerHome>
            <StyleImgHome src={profil} alt="profil"/>
             
          </HomeContainer>
          <div>
            {/* <Card /> */}
            <h2>About me</h2>
          <p>I'm an aspiring UX developer with an eye for detail and passion for quality. <br></br>

When I'm not studying at Chas Academy or working on my own projects, you'll find me gaming with some music in my headphones and my cat Alice on my lap.</p>
          

</div>
        </MainContainer>
        <Footer />
      </GridContainer>
    </Router>
  
  );
}


export default App;


import React from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import {Titleimg,HeadingSlider,Carslider} from './components/main/main.jsx'
import {PerfectCar,LocationCards,Fuelday,TypesofCars,TopHost,BookaCar,AskQuestion,AboutPara} from './components/Perfectcars/Perfectsider'
import  Footer   from './components/footer/footer';


function App() {
  return (
    <>
    < Header/>
    <Titleimg/>
    <HeadingSlider/>
    <Carslider/>
    <PerfectCar/>
    <LocationCards/>
    <Fuelday/>
    <TypesofCars/>
    <TopHost/>
    <BookaCar/>
    <AskQuestion/>
    <AboutPara/>
    <Footer/>
    </>
  );
}

export default App;

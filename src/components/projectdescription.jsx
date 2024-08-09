// import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide from './slide';

function Projectdescription({info}) {


  return (
    <Carousel className='carContainer'>
      <Carousel.Item interval ={10000}>
        <Slide header={"Description:"}> {info.discription}</Slide>
       
      </Carousel.Item>
      <Carousel.Item interval ={10000}>
        <Slide header={"Result:"} link={info.link}> {info.result}</Slide>
      
      </Carousel.Item>
      <Carousel.Item interval ={10000}>
      <Slide header={"Reflection:"}>  {info.reflection}</Slide>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Projectdescription;
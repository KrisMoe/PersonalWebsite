import P5Sketch from './sketch';
import Card from "../css/Cards.module.scss"
import React, { useRef, useLayoutEffect, useState } from 'react';


export default function CanvasCard({seed}) {
    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, []);
    


    return <>



      <div className={Card.card} id = "square" ref={ref}>
     
            <P5Sketch seed = {seed} width = {width-20 } height ={height-20} parent={ref} />
      </div>
   
    
    </>
}
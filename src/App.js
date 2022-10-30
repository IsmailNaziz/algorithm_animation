import svg_0 from './materials/number_0.svg';
import svg_1 from './materials/number_1.svg';
import svg_2 from './materials/number_2.svg';
import svg_3 from './materials/number_3.svg';
import svg_4 from './materials/number_4.svg';
import svg_5 from './materials/number_5.svg';
import svg_6 from './materials/number_6.svg';
import svg_7 from './materials/number_7.svg';
import svg_8 from './materials/number_8.svg';
import svg_9 from './materials/number_9.svg';
import './App.css';
import { motion } from "framer-motion";
import { useState } from 'react';

export class numberSvg {
  constructor(name, svg) {
    this.name = name;
    this.svg = svg;
  }
}


const Number = (props) => {
    return(
      <>
        <motion.img
        className='img'
        src={props.svg} 
        alt='number'
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        onClick={() => alert('Hello')}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}/>
      </>);
  }


function App() {
  const svgs = [svg_0, 
                svg_1, 
                svg_2, 
                svg_3, 
                svg_4, 
                svg_5, 
                svg_6, 
                svg_7, 
                svg_8, 
                svg_9]
  const [rotate, SetRotate] = useState(false)
  const [scale, SetScale] = useState(false)
  const listItems = svgs.map((svg) => <Number svg={svg} rotate={rotate} setter_rotate={SetRotate}/>);

return(
    <div>
      <motion.img
        className='img'
        src={svg_2} 
        alt='number'
        initial={{ scale: 0 }}
        animate={{ rotate: rotate?360:0, scale: scale? 5 : 1 }}
        onClick={() => SetRotate(!rotate) & SetScale(!scale)}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}/>
    </div>
)
}

export default App;

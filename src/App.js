
import { useState,useEffect } from 'react';
import './App.css';
import{motion} from 'framer-motion';

function App() {

  const [MousePosition , setMousePosition]=useState({
    x:0,
    y:0
  });
 const[cursorVariant,setcursorVariant]=useState("default");

  useEffect(() => {
    const mouseMove = e =>{
      setMousePosition({x:e.clientX,y:e.clientY});

    }
    window.addEventListener("mousemove",mouseMove);




    return ()=>{
      window.removeEventListener("mousemove",mouseMove);
    }


    

  },[]); 

  const variants ={
    default:{ 
      x:MousePosition.x-16,
      y:MousePosition.y-16 

    },
    text:{
      height:150,
      width:150,
      x:MousePosition.x-75,
      y:MousePosition.y-75 ,
      backgroundColor:"yellow",
      mixBlendMode:"difference"

 }
  }
 const textEnter=() => setcursorVariant("text");
  const textLeave=() => setcursorVariant("default");
  return (
    <div className="App">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>hello worll</h1>
      <motion.div
       className='cursor'
       variants={variants}
       animate={cursorVariant}

       />
    </div>
  );
}

export default App;

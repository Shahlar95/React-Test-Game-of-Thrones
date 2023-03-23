import React from 'react';
import Char2 from './Char2';


import "./Character.css";

function Character({info}) {
  return (
    <div className='character'>
       {
        info.map(item=>{
            return (<Char2 item ={item}/>)
        })
       }
    </div>
  )
}

export default Character
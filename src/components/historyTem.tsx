import { HistoryPrice } from '../Hook/historyprice';
import React, { useState } from 'react';
//import { Curprice } from "../Hook/currentprice";
import Showhistory from './showhistory';
import { useLocation } from 'react-router-dom';
import { type } from 'node:os';



const HistoryTem = () => {

      const {alldata,selected, setSelected} = HistoryPrice()
      const a = alldata.split("{").join("").split("}").join("").split("\"").join("")
      const all = a.split(":").join(" - ").split(",")
   
      const checkerror = () =>
      {
        if(alldata!="error")
          return <Showhistory list = {all}/>;
        else
          return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
      }
    
    return(
      <div className='text-center space-y-3'>
     <p className='text-2xl font-semibold'>Historical price</p>
     
     {alldata === "" ? <p className='text-2xl'>Loading ...</p> : 
     <div>
      { checkerror() }
 </div> }
   </div>

    )
}

export default HistoryTem
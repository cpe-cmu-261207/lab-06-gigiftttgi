import { HistoryPrice } from '../Hook/historyprice';
import React, { useEffect, useState } from 'react';
//import { Curprice } from "../Hook/currentprice";
import Showhistory from './showhistory';
import { useLocation } from 'react-router-dom';
import { type } from 'node:os';
import axios from 'axios';



const HistoryTem = () => {

    const {alldate,check} = HistoryPrice()

  //console.log(alldate)

      const checkerror = () =>
      {
        if(check!="error")
          return <Showhistory list = {alldate}/>;
        else
          return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
      }
    
    return(
      <div className='text-center space-y-3'>
     <p className='text-2xl font-semibold'>Historical price</p>
     
     {check === null ? <p className='text-2xl'>Loading ...</p> : 
     <div>
      { checkerror() }
 </div> }
   </div>

    )
}

export default HistoryTem
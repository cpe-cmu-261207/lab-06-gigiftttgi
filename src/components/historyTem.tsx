import { HistoryPrice } from '../Hook/historyprice';
import React, { useState } from 'react';
//import { Curprice } from "../Hook/currentprice";
import Showhistory from './showhistory';
import { useLocation } from 'react-router-dom';
import { type } from 'node:os';



const HistoryTem = () => {
  
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
let query = useQuery();
    

interface hisList {
  key : string;
  value : string;
}

const allhis : Array<hisList> = []

      const {alldata,selected, setSelected} = HistoryPrice()
      if(alldata == "error")
      {
        console.log("error")
      }
     const a = alldata.split("{").join("").split("}").join("").split("\"").join("")
     const all = a.split(":").join(" - ").split(",")
   

    
    return(
      <div className='text-center space-y-3'>
     <p className='text-2xl font-semibold'>Historical price</p>
     
     {alldata === ""? <p className='text-2xl'>Loading ...</p> : 
     <div>
     <p className='text-xl font-semibold'> ( From {query.get("start")} To {query.get("end")})</p>
      { <Showhistory list = {all}/>}
 </div> }
     
    
     {/* {alldata === "error"? <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>: 
     <p>There was an error. Please try again later.</p>} */}
   </div>

    )
}

export default HistoryTem
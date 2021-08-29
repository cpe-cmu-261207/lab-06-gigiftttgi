import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link, Route, useHistory } from "react-router-dom";
import HistoryTem from './historyTem';
import { HistoryPrice } from '../Hook/historyprice';


const Historysalecttem = () =>{
    const [fromDate,setfromDate] = useState<string | null>(null);
    const [toDate,settoDate] = useState<string | null>(null);

    let history = useHistory(); 

    const checkdate = () => {
    if(fromDate == null || toDate == null)
    {
        alert("Please select start date and end date correctly");
    }
    else
    {
        const start = fromDate.split("-")
        const end = toDate.split("-")
        if(parseInt(start[0]) > parseInt(end[0]))
            alert("Please select start date and end date correctly");
        else
        {
            if(parseInt(start[1]) > parseInt(end[1]))
                alert("Please select start date and end date correctly");
            else
            {
                if(parseInt(start[2]) > parseInt(end[2]))
                    alert("Please select start date and end date correctly");
                else
                    {
                        history.push('/history/result?start='+fromDate+'&end='+toDate)
                    }
            }
        }
    }
}
 
    return(
        <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e => setfromDate(e.target.value)}></input>
        <span>To date</span>
        <input type='date' onChange={e => settoDate(e.target.value)}></input>
        <br />
        <button onClick = {() => checkdate()} >Get data</button>
        <br/>
      </div>
    )
}

export default Historysalecttem
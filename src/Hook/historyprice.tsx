import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Historysalecttem from '../components/historyselecttem';
import { useLocation } from 'react-router-dom';



export const HistoryPrice = () => {
   
    const [alldate,setAlldate] = useState<string[]>([])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

    let query = useQuery();

    const [check, setCheck] = useState<string | null>(null)
	  //const [selected, setSelected] = useState<string>('')
    useEffect(() => {
      axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${query.get("start")}&end=${query.get("end")}`)
      .then((resp) => {
        let arr=[]
          for (const [key, value] of Object.entries(resp.data.bpi)) {
            arr.push(`${key} - ${Number(value).toLocaleString()} THB`)}
          setAlldate(arr)
          setCheck("")
        })
      .catch(err => setCheck("error"))
    },[])

	return {alldate,check}
}
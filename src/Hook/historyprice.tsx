import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Historysalecttem from '../components/historyselecttem';
import { useLocation } from 'react-router-dom';

type historydata = Record<string, {price: number}>

export const HistoryPrice = () => {
   

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

    let query = useQuery();

    const [alldata, setalldata] = useState<string>('')
	const [selected, setSelected] = useState<string>('')

	useEffect(() => {
	  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${query.get("start")}&end=${query.get("end")}`)
		.then((resp) => {
      setalldata(JSON.stringify(resp.data.bpi) )
      })
		.catch(err => setalldata("error"))
	})

	return {alldata,selected, setSelected}
}
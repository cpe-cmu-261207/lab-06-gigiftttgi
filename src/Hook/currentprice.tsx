import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export const Curprice = () => {
	const [curprice, setCurprice] = useState<string | null>(null)
  const [curtime, setCurtime] = useState<string | null>()
	const [selected, setSelected] = useState<string>('')
  
	useEffect(() => {
	setCurprice(null)
 
	  axios.get(`https://api.coindesk.com/v1/bpi/currentprice/thb.json${selected}`)
		.then((resp) => {
      const time = resp.data.time.updated
      setCurtime(time)
      const price = resp.data.bpi.THB.rate
      setCurprice(price)
      })
		.catch(err => console.log(err))
	}, [selected])

	return {curprice,curtime,selected, setSelected}
}

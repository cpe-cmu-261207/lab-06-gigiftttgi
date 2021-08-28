import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
 

export const HistoryPrice = (fromdate : string|null, todate :string|null) => {
    //     const [data,setData] = useState<string>()

    //   useEffect(() => {
    //     axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=2021-08-09&end=2021-08-10`)
    //       .then((resp) => {
    //     setData(resp.data)
    //     console.log(data)
    //     //setData(time)
    //     })
    //       .catch(err => console.log(err))
    //   })
    // return {data}
    console.log(fromdate)
}
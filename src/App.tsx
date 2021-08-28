import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Curprice } from './Hook/currentprice';
import { getParsedCommandLineOfConfigFile, isTemplateMiddleOrTemplateTail } from 'typescript';
//import curTem from './components/curTem';
import CurTem from './components/curTem';
import { HistoryPrice } from './Hook/historyprice';
//import HistoryPrice from './components/HistoryPrice';


function App() {

const [fromDate,setfromDate] = useState<string | null>(null);
const [toDate,settoDate] = useState<string | null>(null);


const checkdate = (fromdate : string|null, todate :string|null) =>
  {
    if(fromdate == null || todate == null)
    {
        alert("Please select start date and end date correctly");
    }
    else
    {
      HistoryPrice(fromdate, todate)
      // setfromDate(null)
      // settoDate(null)
    }
    
  }

  return (
    <Router>

      <Navbar />

      <Switch>

      <Route path='/' exact>
        <CurTem/>
        </Route>


        <Route path='/current'>
        <CurTem/>
        </Route>


      <Route path='/history/select'>
      <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e=> setfromDate(e.target.value)}></input>
        <span>To date</span>
        <input type='date' onChange={e => settoDate(e.target.value)}></input>
        <br />
        <button onClick = {() => checkdate(fromDate,toDate)}>Get data</button>
        <br/>
      </div>
       
      </Route>



      <Route path='/about'>
      {/* template for about me */}
      <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>About me</p>
        <p className='text-xl'>Natcha Silakorn 630610727</p>
      </div>
      </Route>

      

    </Switch>
    </Router>
  );
}

export default App;

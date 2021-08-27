import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Curprice } from './Hook/currentprice';
import { getParsedCommandLineOfConfigFile } from 'typescript';
import curTem from './components/curTem';
import CurTem from './components/curTem';
function App() {

  //const {curprice,curtime,selected, setSelected} = Curprice()

  return (
    <Router>
      <Navbar />

    
      <Switch>

        <Route path='/Current'>
        <CurTem/>
        </Route>


      <Route path='/Historical'>
      {/* template for /history/select */}
      <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e => console.log(e.target.value)}></input>
        <span>To date</span>
        <input type='date' onChange={e => console.log(e.target.value)}></input>
        <br />
        <button>Get data</button>
      </div>
       {/* template for /history/result */}
       <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Historical price</p>
        <p className='text-2xl'>Loading ...</p>
        <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        <p className='text-xl font-semibold'> ( From 2021-01-01 To 2021-01-02)</p>
        <ul>
          <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
          <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
          <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li>
        </ul>
      </div>
      </Route>



      <Route path='/About'>
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

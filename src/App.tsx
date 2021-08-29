import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Curprice } from './Hook/currentprice';
import { getParsedCommandLineOfConfigFile, isTemplateMiddleOrTemplateTail } from 'typescript';
//import curTem from './components/curTem';
import CurTem from './components/curTem';
import { HistoryPrice } from './Hook/historyprice';
//import HistoryPrice from './components/HistoryPrice';
import Historysalecttem from './components/historyselecttem';
import HistoryTem from './components/historyTem';


function App() {

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
       <Historysalecttem/>
      </Route>

      <Route path ='/history/result'> 
        <HistoryTem/>
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

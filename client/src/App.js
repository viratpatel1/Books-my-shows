import Navbar from './Componends/Navbar';
import Register from "./Componends/Register";
import Movies from './Componends/Movies';
import Login from "./Componends/Login";
import Apps from './Admin-Componends/Apps';
import BookingModal from './Componends/BookingModal';
import { initialState, reducer } from "./useRuducer/reducer";
import './App.css';
import React, { useEffect, createContext, useReducer, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PageNotFound from './Componends/PageNotFound';



export const SwitchContext = createContext();
const Routing = () =>
{
  return (
    <>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/book-ticket/:id" component={BookingModal} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Register} />
        <Route exact path="/admin" component={Apps} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </>
  )
}



function App()
{
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <Apps /> */}
      <Router>
        <SwitchContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routing />
        </SwitchContext.Provider>
      </Router>
    </div>
  );
}


export default App



import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import React from 'react';
import FilterThrough from './FilterThrough';
import DisplayAllPerfumes from './DisplayAllPerfumes';
// import './App.css';

// import DisplayAllPerfumes from './DisplayAllPerfumes';
// import AddNewPerfume from './AddNewPerfume';
export default function MainMenu() {
  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  // };
  return (
    <Router>
      <div>
        <h1 className='text-center display-4'>What is the best fragrance for you today?</h1>
        {/* <AddNewPerfume /> */}

        {/* <input type='text' value={message} onChange={handleChange} /> */}
      </div>
      <nav>
        <div className='ms-4 mb-2 '>
          <NavLink to='/database' className=' fs-3 border-0 text-success text-decoration-none'>
            Perfume Database
          </NavLink>
        </div>
        <div className='ms-4 mb-3'>
          <NavLink to='/filterthrough' className=' fs-3 border-0 text-success text-decoration-none'>
            Search for the best one!
          </NavLink>
        </div>
      </nav>
      <Switch>
        <Route path='/database'>
          <DisplayAllPerfumes />
        </Route>
        <Route path='/filterthrough'>
          <FilterThrough />
        </Route>
      </Switch>
      {/* <DisplayAllPerfumes /> */}
    </Router>
    //
  );
}

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import React from 'react';
import FilterThrough from './FilterThrough';
import DisplayAllPerfumes from './DisplayAllPerfumes';

export default function MainMenu() {
  return (
    <Router>
      <nav>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='ms-4 mb-2 col-3'>
              <NavLink to='/database' className=' fs-3  btn btn-outline-success'>
                Perfume Database
              </NavLink>
            </div>
            <div className=' mb-2 text-center col-4'>
              <NavLink to='/' className=' fs-3  btn btn-outline-success'>
                Search for the best one!
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path='/database'>
          <DisplayAllPerfumes />
        </Route>
        <Route path='/'>
          <FilterThrough />
        </Route>
      </Switch>
    </Router>
    //
  );
}

import React from 'react';
import  Users from './Components/Users'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


import User from './Components/User';

function App() {
  return (
    <div>
      <Router>
        <Link to="/">
          Users
        </Link>

        <Switch>
          <Route exact path="/">
            <Users></Users>
          </Route>
          <Route path="/user/:id">
            <User></User>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

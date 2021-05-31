
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Homepage from '../src/routes/homepage/homepage'
import Tournament from './routes/tournament/tournament';
import Team from './routes/team/Team';
import SignIn from './routes/auth/signin';
import SignUp from './routes/auth/signup';
import Profile from './routes/auth/Profile'
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/tournament">
            <Tournament />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import Register from './components/register';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

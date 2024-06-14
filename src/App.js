import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import ManageAdmins from './components/mangeadmin';
import ManageCollector from './components/managecollector';
import ManageDispatcher from './components/managedispatcher';
import ViewMap from './components/viewmap';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mangeadmin" component={ManageAdmins} />
        <Route path="/managecollector" component={ManageCollector} />
        <Route path="/managedispatcher" component={ManageDispatcher} />
        <Route path="/viewmap" component={ViewMap} />
      </Switch>
    </Router>
  );
}

export default App;

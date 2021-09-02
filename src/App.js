import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Arts from './Pages/Arts/Arts';
import Artists from './Pages/Artists/Artists';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Auth} />
        <Route path="/arts" component={Arts} />
        <Route path="/artists" component={Artists} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

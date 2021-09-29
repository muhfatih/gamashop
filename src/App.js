import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/dashboard" component={Dashboard} />
		</Switch>
	</Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ContextProvider from './core/contexts';

import Home from './pages';
import Login from './pages/login';
import SignUp from './pages/signup';
import SellerLogin from './pages/seller/login';
import SellerSignUp from './pages/seller/signup';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';

const App = () => {
	return (
		<ContextProvider>
			<Router>
				<Switch>
					<Route exact path="/seller/login" component={SellerLogin} />
					<Route exact path="/seller/signup" component={SellerSignUp} />
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/profile" component={Profile} />
				</Switch>
			</Router>
		</ContextProvider>
	);
  }

export default App;
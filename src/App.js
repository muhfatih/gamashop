import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ContextProvider from './core/contexts';

import Home from './pages';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import ProductDetail from "./pages/product_detail";

const App = () => {
	return (
		<ContextProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/product/:id" component={ProductDetail}/>
				</Switch>
			</Router>
		</ContextProvider>
	);
  }

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useLocation,
	useParams
} from 'react-router-dom';
import { Header, Footer } from '../components';

function BasicExample() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/header'>Header</Link>
					</li>
					<li>
						<Link to='/Footer'>Footer</Link>
					</li>
				</ul>

				<hr />

				{/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/header' component={Header}></Route>
					<Route exact path='/footer' component={Footer}></Route>
				</Switch>
			</div>
		</Router>
	);
}

// You can think of these components as "pages"
// in your app.

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

ReactDOM.render(<BasicExample />, document.getElementById('app'));

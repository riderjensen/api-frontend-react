import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Create from './containers/Create/Create';
import FindOne from './containers/FindOne/FindOne';
import Update from './containers/Update/Update';
import Delete from './containers/Delete/Delete';
import Nav from './components/Nav/Nav';




class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Switch>
					<Route path="/update" component={Update} />
					<Route path="/create" component={Create} />
					<Route path="/find-one" component={FindOne} />
					<Route path="/delete" component={Delete} />
					<Route path="/" component={Home} />
				</Switch>
			</div>

		);
	}
}

export default App;

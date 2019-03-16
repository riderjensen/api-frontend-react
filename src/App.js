import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Create from './containers/Create/Create';
import FindOne from './containers/FindOne/FindOne';
import Update from './containers/Update/Update';
import Delete from './containers/Delete/Delete';
import Nav from './components/Nav/Nav';

import MainCTA from './components/Home/Header/Heads';



class App extends Component {
	render() {
		return (
			<div style={{
				overflow: 'hidden'
			}}>
				<Nav />
				<MainCTA>
					<Switch>
						<Route path="/update" component={Update} />
						<Route path="/create" component={Create} />
						<Route path="/find-one" component={FindOne} />
						<Route path="/delete" component={Delete} />
						<Route path="/" component={Home} />
					</Switch>
				</MainCTA>
			</div>

		);
	}
}

export default App;

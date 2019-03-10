import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.css';

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/" activeClassName="active" className={classes.link}>Search</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/delete" activeClassName="active" className={classes.link}>Delete</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/update" activeClassName="active" className={classes.link}>Update</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/create" activeClassName="active" className={classes.link}>Create</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/find-one" activeClassName="active" className={classes.link}>Find one</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

import React, { Component } from 'react';
import axios from '../../axios-api.js';
export default class Home extends Component {
	state = {
		id: ''
	}

	createOrder = () => {
		axios.post('/api/create')
			.then(resp => {
				console.log(resp)
				this.setState({
					id: resp.data._id
				})
			})
			.catch(err => {
				console.log(err)
			});
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xs-12"></div>
						<div className="form-group col-md-4 col-xs-12">
							<button className="btn btn-primary" onClick={this.createOrder}>Click to create a new entry</button>
							<p className="card-text">Your ID:</p>
							<p className="card-title">{this.state.id}</p>
						</div>
						<div className="col-md-4 col-xs-12"></div>
					</div>
				</div>
			</div>
		)
	}
}

import React, { Component } from 'react';
import axios from '../../axios-api.js';
export default class Home extends Component {
	state = {
		id: ''
	}


	handleChange = (val, name) => {
		const newState = { ...this.state.inputs };
		newState[name].value = val;
		this.setState({
			inputs: newState
		})
	}

	deleteOrder = () => {
		axios.delete(`/api/delete/${this.state.id}`)
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
						<div className="form-group col-xs-12 col-md-4">
							<label>Your ID</label>
							<input type="text" onChange={this.handleChange} className="form-control" required={true} placeholder="" />
							<small className="form-text text-muted">You are only allowed to delete entries that you have made with
						your generated ID.</small>
							<button className="btn btn-primary" onClick={this.deleteOrder}>Rest Call</button>
							<button className="btn btn-primary">GraphQL Call</button>
						</div>
					</div>
					<div className="col-md-4 col-xs-12"></div>
				</div>
			</div>
		)
	}
}



import React, { Component } from 'react';
import axios from '../../axios-api.js';
import Input from '../../components/UI/Input/Input';
export default class Home extends Component {
	state = {
		inputs: {
			id: {
				placeholder: 'ID',
				name: 'id',
				required: true,
				type: 'text',
				value: '',
			}
		},
	}


	handleChange = (val, name) => {
		const newState = { ...this.state.inputs };
		newState[name].value = val;
		this.setState({
			inputs: newState
		})
	}

	deleteOrderRest = () => {
		axios.delete(`/api/delete/${this.state.inputs.id.value}`)
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

	deleteOrderGraphQL = () => {
		const graphqlQuery = {
			mutation: `deleteDataPoint(id: ${this.state.inputs.id.value})`
		};
		axios.post('/sub', {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(graphqlQuery)
		}).then((myJson) => {
			console.log(myJson)
		})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xs-12"></div>
						<div className="form-group col-xs-12 col-md-4">
							{Object.keys(this.state.inputs).map((key, index) => {
								return <div key={index} className="col-xs-12 col-sm-6">
									<Input changeHandler={this.handleChange} inputSetters={this.state.inputs[key]} />
								</div>
							}
							)}
							<small className="form-text text-muted">You are only allowed to delete entries that you have made with
						your generated ID.</small>
							<button className="btn btn-primary" onClick={this.deleteOrderRest}>Rest Call</button>
							<button className="btn btn-primary" onClick={this.deleteOrderGraphQL}>GraphQL Call</button>
						</div>
					</div>
					<div className="col-md-4 col-xs-12"></div>
				</div>
			</div>
		)
	}
}



import React, { Component } from 'react';

import axios from '../../axios-api.js';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import Button from '../../components/UI/Button/Button';
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
		deleted: false
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

	render() {

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xs-12"></div>
						<div className="form-group col-xs-12 col-md-4">
							{this.state.deleted ? <div>Item has been deleted</div> : <div>Item has NOT been deleted</div>}
							{Object.keys(this.state.inputs).map((key, index) => {
								return <div key={index} className="col-xs-12 col-sm-6">
									<Input changeHandler={this.handleChange} inputSetters={this.state.inputs[key]} />
								</div>
							}
							)}
							<p style={{
								color: 'white'
							}} className="form-text">You are only allowed to delete entries that you have made with
						your generated ID.</p>
							<Button onClick={this.deleteOrderRest}>Rest Call</Button>

							<Mutation mutation={gql`
								mutation deleteOne{
									deleteDataPoint(id: "${this.state.inputs.id.value}")
								}
							`}>
								{(deleteOne) => (
									<Button className="btn btn-primary" onClick={() => deleteOne().then(resp => this.setState({ deleted: resp.data.deleteDataPoints }))}>GraphQL Call</Button>
								)}
							</Mutation>


						</div>
					</div>
					<div className="col-md-4 col-xs-12"></div>
				</div>
			</div>
		)
	}
}


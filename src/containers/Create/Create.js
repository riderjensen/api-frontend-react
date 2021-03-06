import React, { Component } from 'react';
import axios from '../../axios-api.js';

import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Button from '../../components/UI/Button/Button';

export default class Home extends Component {
	state = {
		id: ''
	}

	createOrder = () => {
		axios.post('/api/create')
			.then(resp => {
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

							<Mutation mutation={gql`
								mutation CreateNewItem{
									createNewItem{
										id
									}
								}
							`}>
								{(createNewItem) => (
									<div>
										<Button className="btn btn-primary" onClick={this.createOrder}>Rest Call</Button>
										<Button className="btn btn-primary" onClick={() => createNewItem().then(resp => this.setState({ id: resp.data.createNewItem.id }))}>GraphQL Call</Button>
										<p className="card-text">Your ID:</p>
										<p className="card-title">{this.state.id}</p>
									</div>
								)}
							</Mutation>
						</div>
						<div className="col-md-4 col-xs-12"></div>
					</div>
				</div>
			</div>
		)
	}
}
import React, { Component } from 'react';
import axios from '../../axios-api.js';

import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

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

							<Mutation mutation={gql`
								mutation CreateNewItem{
									createNewItem{
										id
									}
								}
							`}>
								{(createNewItem) => (
									<div>
										<button className="btn btn-primary" onClick={this.createOrder}>Rest Call</button>
										<button className="btn btn-primary" onClick={() => createNewItem().then(resp => this.setState({ id: resp.data.createNewItem.id }))}>GraphQL Call</button>
										<p className="card-text">Your ID:</p>
										<p className="card-title">{this.state.id}</p>
									</div>
								)}
							</Mutation>



							{/* <Query
								query={gql`
									{
										getAllItems{
											id
										updatedAt
											createdAt
										items{
											funny{
												com
												found
												}
											}
										}
									}
									`}
							>
								{({ loading, error, data }) => {
									if (loading) return <p>Loading...</p>;
									if (error) return <p>Error :(</p>;

									return data.getAllItems.map((item) => (
										<div key={item.id}>
											<p>{item.updatedAt}</p>
										</div>
									));
								}}
							</Query> */}
						</div>
						<div className="col-md-4 col-xs-12"></div>
					</div>
				</div>
			</div>
		)
	}
}

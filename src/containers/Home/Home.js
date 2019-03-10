import React, { Component } from 'react';

import MainCta from '../../components/Home/Header/Heads';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

export default class Home extends Component {
	state = {
		inputs: {
			firstDate: {
				placeholder: 'First Date',
				name: 'firstDate',
				required: true,
				type: 'text',
				value: '',
			},
			secondDate: {
				placeholder: 'Second Date',
				name: 'secondDate',
				required: true,
				type: 'text',
				value: '',
			}
		}

	}

	handleChange = (val, name) => {
		const newState = { ...this.state.inputs };
		newState[name].value = val;
		this.setState({
			inputs: newState
		})
	}

	render() {
		return (
			<MainCta>
				<div className="container">
					<h2>REST API</h2>
					<div className="row">
						{Object.keys(this.state.inputs).map((key, index) => {
							return <div key={index} className="col-xs-12 col-sm-6">
								<Input changeHandler={this.handleChange} inputSetters={this.state.inputs[key]} />
							</div>
						}
						)}
					</div>
					<Button>Test</Button>
					<h2>GraphQL</h2>

					<div className="row">
						{Object.keys(this.state.inputs).map((key, index) => {
							return <div key={index} className="col-xs-12 col-sm-6">
								<Input changeHandler={this.handleChange} inputSetters={this.state.inputs[key]} />
							</div>
						}
						)}
					</div>
					<Button>Test</Button>
				</div>
				<div id="chartContainer" style={
					{
						height: 300,
						width: 100
					}

				}></div>
			</MainCta >
		)
	}
}

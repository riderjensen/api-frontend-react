import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import axios from '../../axios-api';

import CanvasJSReact from '../../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Home extends Component {
	state = {
		inputs: {
			firstDate: {
				placeholder: 'First Date',
				name: 'firstDate',
				required: true,
				type: 'text',
				value: '2019-03-28',
			},
			secondDate: {
				placeholder: 'Second Date',
				name: 'secondDate',
				required: true,
				type: 'text',
				value: '2019-03-30',
			}
		},
		dataPoints: [

		]
	}


	getRestCall = () => {
		axios.get(`https://riderjensen.com/api/range/${this.state.inputs.firstDate.value}$${this.state.inputs.secondDate.value}`)
			.then((myJson) => {
				const newState = { ...this.state };
				newState.dataPoints = [...myJson.data]
				this.setState({
					dataPoints: newState.dataPoints
				})
			})
			.catch(err => console.log(err));
	}



	handleChange = (val, name) => {
		const newState = { ...this.state.inputs };
		newState[name].value = val;
		this.setState({
			inputs: newState
		})
	}

	render() {


		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2",
			title: {
				text: "How many F words per 100 comments"
			},
			data: [{
				type: "column",
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: this.state.dataPoints

			}]
		}
		let test = null;

		this.state.dataPoints.length !== 0 ? test = <CanvasJSChart options={options} onRef={ref => this.chart = ref} /> : test = null;

		return (
			<div className="container">
				<h2>Graph comparing subreddits</h2>
				<div className="row">
					{Object.keys(this.state.inputs).map((key, index) => {
						return <div key={index} className="col-xs-12 col-sm-6">
							<Input changeHandler={this.handleChange} inputSetters={this.state.inputs[key]} />
						</div>
					}
					)}
				</div>
				<Button onClick={this.getRestCall}>Generate</Button>
				{test}
			</div>
		)
	}
}

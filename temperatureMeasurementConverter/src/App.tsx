import React, { Component } from 'react';

interface TemperatureConverterProps {}

interface TemperatureConverterState {
	temperature: string;
	scale: 'C' | 'F';
}

class TemperatureConverter extends Component<
	TemperatureConverterProps,
	TemperatureConverterState
> {
	constructor(props: TemperatureConverterProps) {
		super(props);
		this.state = {
			temperature: '',
			scale: 'C',
		};
	}

	handleTemperatureChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		this.setState({ temperature: event.target.value });
	};

	handleScaleChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		this.setState({ scale: event.target.value as 'C' | 'F' });
	};

	convertTemperature = (temperature: number, scale: 'C' | 'F') => {
		if (scale === 'C') {
			return (temperature * 9) / 5 + 32; // Celsius to Fahrenheit
		} else {
			return ((temperature - 32) * 5) / 9; // Fahrenheit to Celsius
		}
	};

	render() {
		const { temperature, scale } = this.state;
		const temperatureValue = parseFloat(temperature);
		const convertedTemperature = !isNaN(temperatureValue)
			? this.convertTemperature(temperatureValue, scale)
			: '';

		return (
			<div>
				<h2>Temperature Converter</h2>
				<input
					type="text"
					value={temperature}
					onChange={this.handleTemperatureChange}
					placeholder="Enter temperature"
				/>
				<select value={scale} onChange={this.handleScaleChange}>
					<option value="C">Celsius</option>
					<option value="F">Fahrenheit</option>
				</select>
				<p>
					{temperature}{' '}
					{scale === 'C' ? 'Celsius' : 'Fahrenheit'} is equal
					to {convertedTemperature}{' '}
					{scale === 'C' ? 'Fahrenheit' : 'Celsius'}.
				</p>
			</div>
		);
	}
}

export default TemperatureConverter;

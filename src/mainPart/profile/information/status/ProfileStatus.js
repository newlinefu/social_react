import React from 'react';
import styles from './profileStatus.module.css';

export default class ProfileStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			change: false,
			status: this.props.status
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		if(prevProps.status !== this.props.status) 
			this.setState({
				status: this.props.status
			})
	}

	setChanging = () => {
		this.setState({
			change: true
		})
	}

	setNonChanging = () => {
		this.setState({
			change: false
		})
		this.props.updateStatus(this.state.status);
	}

	changeStatusInput = (event) => {
		this.setState({
			status: event.currentTarget.value
		})
	}

	render() {
		if(!this.state.change)
			return <div 
						onDoubleClick = {this.setChanging} 
						className = {styles.non_change}>
					{this.state.status || '------'}
					</div> 
		else
			return <div>
					<input 
						type="text" 
						value = {this.props.status} 
						onBlur = {this.setNonChanging}
						onChange = {this.changeStatusInput} 
						autoFocus = {true} 
						className = {styles.change}
						value = {this.state.status}
						/>
				</div>
	}
}
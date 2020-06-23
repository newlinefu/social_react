import React from 'react';
import {useState, useEffect} from 'react';
import styles from './profileStatus.module.css';

export default function ProfileStatus(props) {
	
	let [change, setChange] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect( () => {
		setStatus(props.status);
	}, [props.status])

	function setChanging() {
		setChange(true);
	}

	function setNonChanging(){
		setChange(false);
		props.updateStatus(status);
	}

	function changeStatusInput(event) {
		setStatus(event.currentTarget.value);
	}
	
	if(!change)
		return <div 
					onDoubleClick = {setChanging} 
					className = {styles.non_change}>
				{status || '------'}
				</div> 
	else
		return <div>
				<input 
					type="text" 
					value = {props.status} 
					onBlur = {setNonChanging}
					onChange = {changeStatusInput} 
					autoFocus = {true} 
					className = {styles.change}
					value = {status}
					/>
			</div>
}
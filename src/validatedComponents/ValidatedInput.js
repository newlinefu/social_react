import React from 'react';
import styles from './validatedComponents.module.css';


export default function ValidatedInput({input, meta, ...props}) {
	return (
		<div className = {styles.validated_input_wrapper}>
			<input 
				placeholder = {props.placeholder}
				{...input}
				className = {`${props.className} ${meta.error ? styles.error_input : ''}`}/>
			{meta.error && <div className = {styles.error_input_block}>{meta.error}</div>}
		</div>
	)
}
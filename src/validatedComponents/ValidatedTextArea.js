import React from 'react';
import styles from './validatedComponents.module.css';

export default function ValidatedTextArea({input, meta, ...props}) {
	return (
		<div>
			<textarea 
				placeholder = {props.placeholder} 
				{...input} 
				className = {`${props.className} ${meta.error ? styles.error_area : ''}`}
			></textarea>
			{meta.error && <div className = {styles.error_block}>{meta.error}</div>}
		</div>
	)
}
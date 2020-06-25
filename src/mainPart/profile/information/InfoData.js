import React from 'react';
import styles from './info.module.css';

export default function InfoData(props) {


	return (
		<div className={styles.info_data_wrapper}>
			<div>
				<b>AboutMe:</b> <span className = {styles.higthlight}>{props.profileInfo.aboutMe}</span>
			</div>
			<div>
				<b>Looking for a job:</b> {props.profileInfo.lookingForAJob 
					? <span className = {styles.higthlight}>Yes</span>
					: <span className = {styles.higthlight}>No</span>}
			</div>
			{props.profileInfo.lookingForAJob 
				? (<div>
						<b>Comment for looking for a job:</b> <span className = {styles.higthlight}>{props.profileInfo.lookingForAJobDescription}</span>
					</div>
				)
				: null}
			<div>
				<b>Contacts</b> {Object.keys(props.profileInfo.contacts).map(key => {
					return <p className={styles.contact_item}>{key}: <span className = {styles.higthlight}>{props.profileInfo.contacts[key]}</span></p>
				})}
			</div>
			<div>
				<button onClick = {props.activateEditMode} className = 'standart_btn'>Изменить</button>
			</div>
		</div>
	)
}
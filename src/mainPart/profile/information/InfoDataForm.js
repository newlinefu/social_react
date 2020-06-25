import React from 'react';
import styles from './info.module.css';
import { Field, reduxForm } from 'redux-form'

function InfoDataForm(props) {
	return (
		<form onSubmit = {props.handleSubmit} className={styles.info_data_form_wrapper}>
			<div>
				<Field
					component = 'input'
					placeholder = 'About me'
					type = 'text'
					name = 'aboutMe'
					className = {styles.info_data_input}
				></Field>
			</div>
			<div>
				looking for a job: 
				<Field
					component = 'input'
					type = 'checkbox'
					name = 'lookingForAJob'
					className = {styles.check}
				></Field>
			</div>
			<div>
				<Field
					component = 'textarea'
					placeholder = 'Comment for looking for a job'
					name = 'lookingForAJobDescription'
					className = {styles.info_data_ta}
				></Field>
			</div>
			<p>Change Contacts</p>
			{
				Object.keys(props.profileInfo.contacts).map(key => {
					return (
						<div>
							<Field
									component = 'input'
									type = 'text'
									name = {'contacts.' + key}
									placeholder = {key}
									key = {key}
									className = {styles.info_data_input}
							></Field>
						</div>
					)
				})
			}
			{props.error ? <div>{props.error}</div> : undefined}
			<div>
				<button type = 'submit' className='standart_btn'>Сохранить</button>
			</div>
		</form>
	)
}

export default reduxForm({

	form: 'infoDataForm'

})(InfoDataForm);
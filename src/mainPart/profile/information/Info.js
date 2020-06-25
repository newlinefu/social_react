import React, {useState} from 'react';
import styles from './info.module.css';
import ProfileStatus from './status/ProfileStatus';
import avatar from '../../../resourses/avatar.png';
import InfoData from './InfoData'
import InfoDataForm from './InfoDataForm';

export default function Info(props) {

	let [editMode, setEditMode] = useState(false);

	function setPhoto(event) {
		if(event.target.files.length)
			props.setPhotos(event.target.files[0]);
	}

	function activateEditMode() {
		setEditMode(true);
	}

	function onSubmit() {
		props.sendFormDataValues(props.infoDataForm.values).then(() => {
			setEditMode(false);
		})
	}

	return (
		<div className={styles.info_block}>
			<div className={styles.image_block}>
				<img src={props.avatar || avatar} alt="" className={styles.avatar}/>
				{!!props.userId || (
					<div>
						<input type="file" onChange = {setPhoto} className={styles.file} id="file"/>
						<label for="file" className={styles.file_label}>Сменить аватарку</label>
					</div>)}
			</div>
			<div className={styles.info}>
				<p className = {`${styles.full_name} ${styles.higthlight}`}>{props.profileInfo.fullName}</p>
				<ProfileStatus 
					status = {props.status}
					updateStatus = {props.updateStatus}>
				</ProfileStatus>
				{editMode 
					? <InfoDataForm
						profileInfo={props.profileInfo}
						initialValues = { {
							'aboutMe': props.profileInfo.aboutMe, 
							'lookingForAJob': props.profileInfo.lookingForAJob,
							'lookingForAJobDescription': props.profileInfo.lookingForAJobDescription,
							'contacts': props.profileInfo.contacts
						} }
						onSubmit = {onSubmit}
						></InfoDataForm> 
					: <InfoData 
						profileInfo = {props.profileInfo} 
						activateEditMode = {activateEditMode}>
						</InfoData>}
			</div>
			
		</div>
	);
}
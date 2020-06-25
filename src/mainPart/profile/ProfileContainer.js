import React from 'react';
import {useEffect} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
	addPostDelegate, 
	changeAreaDelegate, 
	setProfile,
	getStatus,
	updateStatus,
	setPhotos,
	sendFormDataValues} from '../../redux/reducers/profileReducer';
import {requests} from '../../API/api';
import Preloader from '../preloader/Preloader';
import {withRouter} from 'react-router-dom';
import styles from './profile.module.css';
import withAuthComponent from '../../hocs/withAuthComponent';
import {compose} from 'redux';

function ProfileAPIContainer(props) {
	
	useEffect( () => {

		let id = props.match.params.userId ? props.match.params.userId : props.defaultId;
		if(id !== props.defaultId || id !== null)
			props.setProfile(id);

		props.getStatus(id);

	}, [props.match.params.userId])


	if(!props.profileInfo) 
		return <div className = {styles.loader_wrapper}>
		<Preloader></Preloader>
		</div>
	return (
		<Profile
			postAreaData = {props.postAreaData}
			postsData = {props.postsData}
			profileInfo = {props.profileInfo}
			addPost = {props.addPost}
			changeArea = {props.changeArea}
			isLoading = {props.isLoading}
			status = {props.status}
			updateStatus = {props.updateStatus}
			setPhotos = {props.setPhotos}
			userId = {props.match.params.userId}
			infoDataForm = {props.infoDataForm}
			sendFormDataValues = {props.sendFormDataValues}
		></Profile>
	);
}

function mapStateToProps(state) {
	return {
		postAreaData: state.profile.postAreaData,
		postsData: state.profile.postsData,
		profileInfo: state.profile.profileInfo,
		isLoading: state.profile.isLoading,
		defaultId: state.auth.id,
		status: state.profile.status,
		infoDataForm: state.form.infoDataForm
	}
}

export default compose(
	withRouter,
	withAuthComponent,
	connect(mapStateToProps, {
		addPost: addPostDelegate, 
		changeArea: changeAreaDelegate, 
		setProfile: setProfile, 
		getStatus: getStatus, 
		updateStatus: updateStatus,
		setPhotos: setPhotos,
		sendFormDataValues: sendFormDataValues
	})
)(ProfileAPIContainer);

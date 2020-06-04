import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
	addPostDelegate, 
	changeAreaDelegate, 
	setProfile,
	getStatus,
	updateStatus} from '../../redux/reducers/profileReducer';
import {requests} from '../../API/api';
import Preloader from '../preloader/Preloader';
import {withRouter} from 'react-router-dom';
import styles from './profile.module.css';
import withAuthComponent from '../../hocs/withAuthComponent';
import {compose} from 'redux';

class ProfileAPIContainer extends React.Component {

	componentDidMount() {
		let id = this.props.match.params.userId ? this.props.match.params.userId : this.props.defaultId;
		if(id !== this.props.defaultId || id !== null)
			this.props.setProfile(id);

		this.props.getStatus(id)
	
	}

	render() {
		if(!this.props.profileInfo) 
			return <div className = {styles.loader_wrapper}>
			<Preloader></Preloader>
			</div>
		return (
			<Profile
				postAreaData = {this.props.postAreaData}
				postsData = {this.props.postsData}
				profileInfo = {this.props.profileInfo}
				addPost = {this.props.addPost}
				changeArea = {this.props.changeArea}
				wallpaper = {this.props.profileInfo.photos.large}
				isLoading = {this.props.isLoading}
				status = {this.props.status}
				updateStatus = {this.props.updateStatus}
			></Profile>
		);
	}
}

function mapStateToProps(state) {
	return {
		postAreaData: state.profile.postAreaData,
		postsData: state.profile.postsData,
		profileInfo: state.profile.profileInfo,
		isLoading: state.profile.isLoading,
		defaultId: state.auth.id,
		status: state.profile.status
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
		updateStatus: updateStatus
	})
)(ProfileAPIContainer);

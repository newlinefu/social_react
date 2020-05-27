import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
	addPostDelegate, 
	changeAreaDelegate, 
	addProfileInfoDelegate,
	toggleLoadingDelegate} from '../../redux/reducers/profileReducer';
import {requests} from '../../API/api';
import Preloader from '../preloader/Preloader';
import {withRouter} from 'react-router-dom';
import styles from './profile.module.css';

class ProfileAPIContainer extends React.Component {

	componentDidMount() {
		let id = this.props.match.params.userId ? this.props.match.params.userId : this.props.defaultId;
		if(id !== this.props.defaultId || id !== null) {
			this.props.toggleLoading(true);
			requests
				.getProfile(id)
				.then(response => {
					this.props.addProfileInfo(response);
					this.props.toggleLoading(false);
				});				
		}
	
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
		defaultId: state.auth.id
	}
}

const ControlURLComponent = withRouter(ProfileAPIContainer);
const ProfileContainer = connect(mapStateToProps, {
	addPost: addPostDelegate,
	changeArea: changeAreaDelegate,
	addProfileInfo: addProfileInfoDelegate,
	toggleLoading: toggleLoadingDelegate
})(ControlURLComponent);

export default ProfileContainer;

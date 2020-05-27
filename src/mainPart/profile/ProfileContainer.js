import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
	addPostDelegate, 
	changeAreaDelegate, 
	addProfileInfoDelegate,
	toggleLoadingDelegate} from '../../redux/reducers/profileReducer';
import * as axios from 'axios';
import Preloader from '../preloader/Preloader';
import {withRouter} from 'react-router-dom';

class ProfileAPIContainer extends React.Component {

	componentDidMount() {
		let id = this.props.match.params.userId ? this.props.match.params.userId : this.props.defaultId;
		this.props.toggleLoading(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
			.then(response => {
				this.props.addProfileInfo(response.data);
				this.props.toggleLoading(false);
			});		
	}

	render() {
		if(!this.props.profileInfo) 
			return <Preloader></Preloader>
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

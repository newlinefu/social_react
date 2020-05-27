import React from 'react';
import {addPostDelegate, changeAreaDelegate} from '../../../redux/reducers/profileReducer';
import Posts from './Posts';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		postAreaData: state.profile.postAreaData,
		postsData: state.profile.postsData
	}
}
const PostsContainer = connect(mapStateToProps, {
	addPost: addPostDelegate,
	changeArea: changeAreaDelegate
})(Posts);

export default PostsContainer;
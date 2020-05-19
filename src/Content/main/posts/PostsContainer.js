import React from 'react';
import PostsItems from './PostsItems';
import {addPostDelegate, changeAreaDelegate} from '../../../redux/postsReducer';
import Posts from './Posts';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		postAreaData: state.posts.postAreaData,
		postsData: state.posts.postsData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addPost: (text) => {
			dispatch(addPostDelegate(text));
			dispatch(changeAreaDelegate(''));
		},
		changeArea: (text) => {
			dispatch(changeAreaDelegate(text));
		}
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
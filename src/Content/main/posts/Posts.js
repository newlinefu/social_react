import React from 'react';
import './posts.css';
import PostsItems from './PostsItems';
import {addPostDelegate, changeAreaDelegate} from '../../../redux/postsReducer';

export default function Posts(props) {
	const link = React.createRef();

	function addPost() {
		const area = link.current;
		props.dispatch(addPostDelegate(area.value));
		props.dispatch(changeAreaDelegate(''));
	}
	
	function changeArea() {
		const area = link.current;
		props.dispatch(changeAreaDelegate(area.value));
	}

	return (
		<div className="posts">
			<div className="text_area_wrapper">
				<textarea 
					placeholder="Write new post" 
					className = 'post_enter' 
					ref = {link} 
					onChange = {changeArea}
					value = {props.posts.postAreaData}>
				</textarea>
				<button onClick = {addPost} className = 'post_but'>Some button</button>
			</div>
			<PostsItems postsData = {props.posts.postsData}></PostsItems>
		</div>
	);
}
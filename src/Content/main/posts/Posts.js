import React from 'react';
import './posts.css';
import PostsItems from './PostsItems';

export default function Posts(props) {
	const link = React.createRef();

	function addPost() {
		props.addPost(link.current.value);
	}
	
	function changeArea(event) {
		props.changeArea(event.target.value);
	}

	return (
		<div className="posts">
			<div className="text_area_wrapper">
				<textarea 
					placeholder="Write new post" 
					className = 'post_enter' 
					ref = {link} 
					onChange = {changeArea}
					value = {props.postAreaData}>
				</textarea>
				<button onClick = {addPost} className = 'post_but'>Some button</button>
			</div>
			<PostsItems postsData = {props.postsData}></PostsItems>
		</div>
	);
}
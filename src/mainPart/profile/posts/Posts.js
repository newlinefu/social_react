import React from 'react';
import styles from './posts.module.css';
import PostsItems from './postsItems/PostsItems';

export default function Posts(props) {
	const link = React.createRef();

	function addPost() {
		props.addPost(link.current.value);
	}
	
	function changeArea(event) {
		props.changeArea(event.target.value);
	}
	return (
		<div className={styles.posts}>
			<div className={styles.text_area_wrapper}>
				<textarea 
					placeholder="Write new post" 
					className = {styles.post_enter} 
					ref = {link} 
					onChange = {changeArea}
					value = {props.postAreaData}>
				</textarea>
				<button onClick = {addPost} className = 'standart_btn'>ADD POST</button>
			</div>
			<PostsItems postsData = {props.postsData}></PostsItems>
		</div>
	);
}
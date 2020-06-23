import React from 'react';
import styles from './posts.module.css';
import PostsItems from './postsItems/PostsItems';
import PostsForm from './postsForm/PostsForm';

export default React.memo(function Posts(props) {

	function onSubmit(formData) {
		props.addPost(formData.postsTextArea)
	}

	return (
		<div className={styles.posts}>
			<div className={styles.text_area_wrapper}>
				<PostsForm onSubmit = {onSubmit}></PostsForm>
			</div>
			<PostsItems postsData = {props.postsData}></PostsItems>
		</div>
	);
})
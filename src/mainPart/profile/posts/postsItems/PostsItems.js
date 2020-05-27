import React from 'react';
import styles from '../posts.module.css';
import SingleItem from './singleItem/PostsSingleItem';

export default function PostsItems(props) {

	return (
		<div className={styles.block_posts}>
			{
				props.postsData.map( (value, i) => {
					return <SingleItem content = {value.content} key = {i}></SingleItem>
				})
			}
		</div>
	);
}
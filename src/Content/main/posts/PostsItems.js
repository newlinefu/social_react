import React from 'react';
import './posts.css';
import SingleItem from './PostsSingleItem';

export default function PostsItems(props) {

	return (
		<div className="block_posts">
			{
				props.postsData.map( (value, i) => {
					return <SingleItem content = {value.content} key = {i}></SingleItem>
				})
			}
		</div>
	);
}
import React from 'react';
import './posts.css';
import SingleItem from './PostsSingleItem';

export default function PostsItems() {
	return (
		<div className="block_posts">
			<SingleItem content = 'First post'></SingleItem>
			<SingleItem content = 'Second post'></SingleItem>
		</div>
	);
}
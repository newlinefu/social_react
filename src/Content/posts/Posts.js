import React from 'react';
import './posts.css';
import PostsItems from './PostsItems';

export default function Posts() {
	return (
		<div className="posts">
			<textarea id="post_enter" placeholder="Write new post"></textarea>
			<PostsItems></PostsItems>
		</div>
	);
}
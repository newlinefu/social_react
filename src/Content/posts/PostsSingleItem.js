import React from 'react';
import './posts.css';

export default function PostsSingleItem(props) {
	return (
		<div className="post_item">
			{props.content}
		</div>
	);
}
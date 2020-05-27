import React from 'react';
import styles from '../../posts.module.css';

export default function PostsSingleItem(props) {
	return (
		<div className={styles.post_item}>
			{props.content}
		</div>
	);
}
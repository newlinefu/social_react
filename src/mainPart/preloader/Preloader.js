import React from 'react';
import styles from './preloader.module.css';

export default function Loader(props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.lds_circle}><div></div></div>
		</div>
	)
}
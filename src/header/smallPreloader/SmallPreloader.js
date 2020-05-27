import React from 'react';
import styles from './smallPreloader.module.css';

export default function SmallLoader(props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.lds_circle}><div></div></div>
		</div>
	)
}
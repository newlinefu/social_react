import React from 'react';
import styles from './info.module.css';



export default function Info(props) {
	return (
		<div className={styles.info_block}>
			<img src={props.avatar} alt="" className={styles.avatar}/>
			<div className={styles.info}>
				<p>{props.fullName}</p>
			</div>
		</div>
	);
}
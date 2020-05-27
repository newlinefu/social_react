import React from 'react';
import styles from './profile.module.css';
import Info from './information/Info';
import PostsContainer from './posts/PostsContainer';
import Preloader from '../preloader/Preloader';

export default function Profile(props) {
	return (
		<div className = {styles.content}>
		{
			props.isLoading
			? <Preloader></Preloader>
			:   <div>
					<img src={props.wallpaper} alt="" className={styles.wallpaper}/>
					<Info 
						avatar = {props.profileInfo.photos.small}
						fullName = {props.profileInfo.fullName}>
					</Info>

					<PostsContainer 
						postAreaData = {props.postAreaData}
						postsData = {props.postsData}
						addPost = {props.addPost}
						changeArea = {props.changeArea}
					></PostsContainer>
				</div>
			
		}
		</div>
	)		
}
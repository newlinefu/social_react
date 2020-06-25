import React from 'react';
import styles from './profile.module.css';
import Info from './information/Info';
import PostsContainer from './posts/PostsContainer';
import Preloader from '../preloader/Preloader';
import wallpaper from '../../resourses/wallpaper.jpg';

export default function Profile(props) {
	return (
		<div className = {styles.content}>
		{
			props.isLoading
			? <Preloader></Preloader>
			:   <div>
					<img src={wallpaper} alt="" className={styles.wallpaper}/>
					<Info 
						avatar = {props.profileInfo.photos.small}
						profileInfo = {props.profileInfo}
						updateStatus = {props.updateStatus}
						status = {props.status}
						setPhotos = {props.setPhotos}
						userId = {props.userId}
						infoDataForm = {props.infoDataForm}
						sendFormDataValues = {props.sendFormDataValues}>
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
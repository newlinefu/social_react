import React from 'react';
import mainPageStyles from './mainPage.module.css';
import Info from './info/Info';
import PostsContainer from './posts/PostsContainer';

export default function Content(props) {
	return (
		<div className = {mainPageStyles.content}>
			<img src="https://lh3.googleusercontent.com/proxy/xVmyg9uZJgmEwRMTzVEMSxbX_HY0borUwTT6lSweaIaUKrwVyuDIYozBTXH8zU_xTguOPgnz6BoF8sUIhTNrayKqOG4z6fKChfLy5RZ7uSu7369Ex6Fsz3T5A5-eAU-hllLWfYssPQ37dIfVnOLhsN7yEy3a8LLCCw7ajKwfPK8UotJeIs-QNxo" alt="" className={mainPageStyles.wallpaper}/>

			<Info fields = { {Name: 'Sanya', Age: 20, Mail: 'newlinefu@gmail.com', avatarSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'} }></Info>

			<PostsContainer></PostsContainer>
		</div>
	);
}
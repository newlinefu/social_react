import React from 'react';
import mainPageStyles from './mainPage.module.css';
import Info from './info/Info';
import Posts from './posts/Posts';

export default function Content() {
	return (
		<div className = {mainPageStyles.content}>
			<img src="https://lh3.googleusercontent.com/proxy/321evFsPz90BAfKtJCr_3wWkzSdCDduqLcxGNT80ZMGD39pihpEIMJ9eVuMD3TKTnhIEVTAip7KebC_39HUfmUEC6cE9UTpxeWj5fgsCvgL4w7aOql3BVlEWLXh5zD7B7fqFrLYsLqsaJSYhOiyfje9FK64nxAEfc-Rx80vp2LkEhqv21t2Jebk" alt="" className={mainPageStyles.wallpaper}/>

			<Info fields = { {Name: 'Sanya', Age: 20, Mail: 'newlinefu@gmail.com', avatarSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'} }></Info>

			<Posts></Posts>
		</div>
	);
}
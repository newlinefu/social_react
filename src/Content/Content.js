import React from 'react';
import './content.css';
import Info from './info/Info';
import Posts from './posts/Posts';

export default function Content() {
	return (
		<div className = 'content'>
			<img src="https://lh3.googleusercontent.com/proxy/V0z2mHVapQhY6pzRlJPaDmXL3Qmemo1CP2c0tovvzmFHuPZNcTF7BYWNd8TRbTPlVY2JPm3ANl_1gVun4bMHu_-2bOFafctFZ6ZxsywsLNN_fxytvzkOXRWF8WJjIXsZyu1n_GCGYHvIR35a9oNfVBMswx8HifWgTzcS8j83SbScXGsPUitsqT8" alt="" className="wallpaper"/>

			<Info fields = { {Name: 'Sanya', Age: 20, Mail: 'newlinefu@gmail.com', avatarSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'} }></Info>

			<Posts></Posts>
		</div>
	);
}
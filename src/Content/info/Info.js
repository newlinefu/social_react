import React from 'react';
import './info.css';



export default function Info(props) {
	return (
		<div className="info_block">
			<img src={props.fields.avatarSrc} alt="" className="avatar"/>
			<div className="info">
				{
					Object.entries(props.fields).map(value => {
						if(value[0] !== 'avatarSrc')
							return <p className="info_item" key = {value[0]}>{value[0]} : {value[1]}</p>
					})
				}
			</div>
		</div>
	);
}
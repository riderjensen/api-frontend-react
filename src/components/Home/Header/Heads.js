import React from 'react'
import classes from './Heads.css';

import handshake from '../../../assets/images/handshake.jpg';

export default function Header(props) {
	return (
		<div className={classes.Heads} style={{
			backgroundImage: `url(${handshake})`,
		}}>
			<div className={classes.Overlay}></div>
			<div className={classes.Content}>
				<div className={classes.ContentBox}>
					{props.children}
				</div>
			</div>
		</div >
	)
}

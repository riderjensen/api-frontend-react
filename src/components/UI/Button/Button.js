import React from 'react'
import classes from './Button.css';

export default function Button(props) {
	return (
		<a className={classes.Button} href={props.click} onClick={props.onClick}>{props.children}</a>
	)
}

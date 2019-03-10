import React from 'react'
import classes from './Input.css'

export default function Input(props) {
	return (
		<input className={classes.Input} onChange={(e) => props.changeHandler(e.target.value, e.target.name)} {...props.inputSetters} />
	)
}

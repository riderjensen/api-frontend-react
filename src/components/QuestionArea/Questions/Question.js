import React from 'react';
import classes from './Question.css';

import Input from '../../UI/Input/Input';

export default function Question(props) {
	return (

		<label className={classes.Label}>{props.children}
			<Input changeHandler={props.onChange} inputSetters={props.inputSetters} />
		</label>

	)
}

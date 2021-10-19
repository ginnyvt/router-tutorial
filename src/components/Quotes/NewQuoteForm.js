import React from 'react';

import Card from '../UI/Card';

import classes from './NewQuoteForm.module.css';

const NewQuoteForm = (props) => {
	return (
		<Card>
			<form className={classes.form}>
				<div className={classes.control}>
					<label htmlFor='author'>Author</label>
					<input type='text' id='author' />
				</div>
				<div className={classes.control}>
					<label htmlFor='text'>Text</label>
					<textarea id='text' rows='5'></textarea>
				</div>
				<div className={classes.actions}>
					<button className='btn'>Add Quote</button>
				</div>
			</form>
		</Card>
	);
};

export default NewQuoteForm;

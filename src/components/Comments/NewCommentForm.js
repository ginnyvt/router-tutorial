import React from 'react';

import classes from './NewCommentForm.module.css';

const NewCommentForm = () => {
	return (
		<form className={classes.form}>
			<div className={classes.control}>
				<label htmlFor='comment'>Your Comment</label>
				<textarea id='comment' rows='5'></textarea>
			</div>
			<div className={classes.actions}>
				<button className='btn'>Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;

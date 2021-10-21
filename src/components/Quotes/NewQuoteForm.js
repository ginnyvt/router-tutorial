import React, { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router';

import Card from '../UI/Card';
import Spinner from '../UI/Spinner';
import classes from './NewQuoteForm.module.css';

const NewQuoteForm = (props) => {
	const [isEntering, setIsEntering] = useState(false);

	const authorInputRef = useRef();
	const textInputRef = useRef();

	const submitFormHandler = (e) => {
		e.preventDefault();
		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	};

	const formFocusedHandler = () => {
		setIsEntering(true);
	};

	return (
		<Fragment>
			<Prompt
				when={isEntering}
				message={(location) => 'Are you sure you want to leave?'}
			/>
			<Card>
				<form
					className={classes.form}
					onSubmit={submitFormHandler}
					onFocus={formFocusedHandler}
				>
					{props.isLoading && (
						<div className={classes.loading}>
							<Spinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor='author'>Author</label>
						<input type='text' id='author' ref={authorInputRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor='text'>Text</label>
						<textarea id='text' rows='5' ref={textInputRef}></textarea>
					</div>
					<div className={classes.actions}>
						<button className='btn' onClick={() => setIsEntering(false)}>
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default NewQuoteForm;

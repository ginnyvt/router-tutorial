import React, { useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../api/api';

import Spinner from '../UI/Spinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
	const commentTextRef = useRef();
	const { sendRequest, status, error } = useHttp(addComment);
	const { onAddedComment, quoteId } = props;

	useEffect(() => {
		if (status === 'completed' && !error) {
			onAddedComment();
		}
	}, [status, error, onAddedComment]);

	const submitFormHandler = (e) => {
		e.preventDefault();
		const enteredText = commentTextRef.current.value;

		sendRequest({ commentData: { text: enteredText }, quoteId: quoteId });
	};

	return (
		<form className={classes.form} onSubmit={submitFormHandler}>
			{status === 'pending' && (
				<div className='centered'>
					<Spinner />
				</div>
			)}
			<div className={classes.control}>
				<label htmlFor='comment'>Your Comment</label>
				<textarea id='comment' rows='5' ref={commentTextRef}></textarea>
			</div>
			<div className={classes.actions}>
				<button className='btn'>Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;

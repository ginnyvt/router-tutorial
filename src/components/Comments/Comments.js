import React, { useState } from 'react';

import NewCommentForm from './NewCommentForm';
import classes from './Comments.module.css';

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);

	const startAddingCommentHandler = () => {
		setIsAddingComment(true);
	};

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button onClick={startAddingCommentHandler} className='btn'>
					Add a comment
				</button>
			)}
			{isAddingComment && <NewCommentForm />}
			<p>Comments...</p>
		</section>
	);
};

export default Comments;

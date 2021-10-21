import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAllComments } from '../../api/api';
import useHttp from '../../hooks/use-http';

import Spinner from '../UI/Spinner';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import classes from './Comments.module.css';

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const { quoteId } = useParams();

	const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	const startAddingCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedCommentHandler = useCallback(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	let comments;
	if (status === 'pending') {
		comments = (
			<div className='centered'>
				<Spinner />
			</div>
		);
	}

	if (status === 'completed' && loadedComments && loadedComments.length > 0) {
		comments = <CommentsList comments={loadedComments} />;
	}

	if (
		status === 'completed' &&
		(!loadedComments || loadedComments.length === 0)
	) {
		comments = <p className='centered'>No comments were added yet!</p>;
	}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button onClick={startAddingCommentHandler} className='btn'>
					Add a comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm
					quoteId={quoteId}
					onAddedComment={addedCommentHandler}
				/>
			)}
			{comments}
		</section>
	);
};

export default Comments;

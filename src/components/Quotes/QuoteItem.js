import React from 'react';

import classes from './QuoteItem.module.css';
const QuoteItem = () => {
	return (
		<li className={classes.item}>
			<figure>
				<blockquote>text</blockquote>
				<figcaption>author</figcaption>
			</figure>
			<a className='btn'>View Fullscreen</a>
		</li>
	);
};

export default QuoteItem;

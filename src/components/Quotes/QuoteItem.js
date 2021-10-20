import React from 'react';
import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
	console.log(props);
	return (
		<li className={classes.item}>
			<figure>
				<blockquote>{props.text}</blockquote>
				<figcaption>{props.author}</figcaption>
			</figure>
			<Link className='btn' to={`/quotes/${props.id}`}>
				View Fullscreen
			</Link>
		</li>
	);
};

export default QuoteItem;

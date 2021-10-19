import React, { Fragment } from 'react';

import classes from './QuoteList.module.css';

const QuoteList = (props) => {
	return (
		<Fragment>
			<ul className={classes.list}>
				<li>Quote 1</li>
			</ul>
		</Fragment>
	);
};

export default QuoteList;

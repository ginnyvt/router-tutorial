import React, { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighlightedQuote';

const DUMMY_DATA = [
	{
		id: 'q1',
		author: 'Ginny',
		text: 'Playing badminton is great!',
	},
	{
		id: 'q2',
		author: 'Harry',
		text: 'Coding improves your brain.',
	},
];

const QuoteDetail = () => {
	const { quoteId } = useParams();
	const match = useRouteMatch();

	const quote = DUMMY_DATA.find((quote) => quote.id === quoteId);

	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote author={quote.author} text={quote.text} />
			<Route path={match.path} exact>
				<div className='centered'>
					<Link to={`${match.url}/comments`} className='btn btn--flat'>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;

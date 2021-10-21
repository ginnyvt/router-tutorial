import React, { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../api/api';

import Spinner from '../components/UI/Spinner';
import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighlightedQuote';

// const DUMMY_DATA = [
// 	{
// 		id: 'q1',
// 		author: 'Ginny',
// 		text: 'Playing badminton is great!',
// 	},
// 	{
// 		id: 'q2',
// 		author: 'Harry',
// 		text: 'Coding improves your brain.',
// 	},
// ];

const QuoteDetail = () => {
	const { quoteId } = useParams();
	const match = useRouteMatch();

	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);

	// const quote = DUMMY_DATA.find((quote) => quote.id === quoteId);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return <p className='centered'>{error}</p>;
	}

	if (!loadedQuote.text) {
		return <p>No quote found!</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
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

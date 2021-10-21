import React, { useEffect, useState } from 'react';

import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../api/api';

import NoQuotesFound from '../components/Quotes/NoQuotesFound';
import QuoteList from '../components/Quotes/QuoteList';
import Spinner from '../components/UI/Spinner';

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

const AllQuotes = () => {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return <p className='centered focused'>{error}</p>;
	}

	if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
		return <NoQuotesFound />;
	}

	return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;

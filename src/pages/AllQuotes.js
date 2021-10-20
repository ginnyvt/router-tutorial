import React from 'react';
import QuoteList from '../components/Quotes/QuoteList';

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

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;

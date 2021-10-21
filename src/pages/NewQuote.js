import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import useHttp from '../hooks/use-http';
import { addQuote } from '../api/api';

import NewQuoteForm from '../components/Quotes/NewQuoteForm';

const NewQuote = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const history = useHistory();

	useEffect(() => {
		if (status === 'completed') {
			history.push('/quotes');
		}
	}, [status, history]);

	const addQuoteHandler = (quote) => {
		sendRequest(quote);
		// history.push('/quotes');
	};

	return (
		<NewQuoteForm
			onAddQuote={addQuoteHandler}
			isLoading={status === 'pending'}
		/>
	);
};

export default NewQuote;

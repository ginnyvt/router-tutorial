import React from 'react';
import { useHistory } from 'react-router';

import NewQuoteForm from '../components/Quotes/NewQuoteForm';

const NewQuote = () => {
	const history = useHistory();

	const addQuoteHandler = (quote) => {
		console.log(quote);
		history.push('/quotes');
	};

	return <NewQuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

const App = () => {
	return (
		<Switch>
			<Route path='/quotes' exact>
				<AllQuotes />
			</Route>
			<Route path='/quotes/:quoteId'>
				<QuoteDetail />
			</Route>
			<Route path='/new-quote'>
				<NewQuote />
			</Route>
		</Switch>
	);
};

export default App;
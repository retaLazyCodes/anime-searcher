import React from 'react'
import Header from './components/Header'
import HomePage from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { AnimesContextProvider } from './context/AnimesContext'
import './App.css'

import { Link, Route, Switch } from "wouter";


function App() {

	return (
		<StaticContext.Provider value={{}}>
			<div className="App">
				<section className="App-content">
					<Header />
					<Link to="/">
						<figure className="App-logo">
							<img alt="anime logo" src="/ani-logo.png" width="20%" />
						</figure>
					</Link>
					<Switch>
						<AnimesContextProvider>
							<Route
								component={HomePage}
								path="/" />
							<Route
								component={SearchResults}
								path="/search/:keyword"
							/>
							<Route
								component={Detail}
								path="/anime/:id" />
						</AnimesContextProvider>
					</Switch>
				</section>
			</div>
		</StaticContext.Provider>
	);
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";

import { Container } from "@material-ui/core";

import SinglePageContainer from "./pages/PageContainer";
import Movies from "./pages/Movies";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<div className="app">
				<Container>
					<Switch>
						<Route exact path="/" component={Movies} />
						<Route exact path="/:id" component={SinglePageContainer} />
					</Switch>
				</Container>
			</div>
			<SimpleBottomNavigation />
		</BrowserRouter>
	);
};

export default App;

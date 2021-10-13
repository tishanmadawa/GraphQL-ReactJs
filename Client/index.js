import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/client';
import SongList from './components/SongList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from "./components/App"
import SongCreate from "./components/SongCreate"
var client = new ApolloClient({});


const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App} >
                    <IndexRoute Component={SongList} />
                </Route>
                <Route path="song/new" Component={SongCreate} />
            </Router>
            <SongList />
        </ApolloProvider>
    )
}

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate/SongCreate';

import './style/style.css'


const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/* TODO: Need to understand this */}
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

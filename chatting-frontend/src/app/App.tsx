import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  createHttpLink,
} from '@apollo/client';
import { Notifications } from 'react-push-notification';
import { createConsumer } from 'actioncable';
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink';
import { Provider } from 'react-redux';
import { useState } from 'react';
import store from './store';
import { Rooms } from '../components/Rooms';
import { Router, Link } from '@reach/router';
import { Messages } from '../components/Messages';
import { client } from './apollo';
import { Test } from '../components/Test';

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Notifications />
        <div className="App">
          <div className="container">
            <div className="d-flex justify-content-between my-3">
              <h1>Chat</h1>
            </div>

            <div className="row border rounded" style={{ height: 600 }}>
              <div className="col-3 h-100 overflow-auto px-0 bg-dark">
                <Rooms />
              </div>

              <div className="col-9 px-0 h-100">
                <Messages />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </ApolloProvider>
    </Provider>
  );
};

export default App;

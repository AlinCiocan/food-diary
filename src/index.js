import React from 'react';
import { Provider } from 'react-redux';
import Root from './components/Root';
import configureStore from './store/configureStore';
import "./styles/style";

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <Root />}
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route 
        path="/"
        component={App}
      />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

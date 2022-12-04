import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import groupsReducer from './features/groupSlice';
import progressReducer from './features/progressSlice';
import './index.scss';

const store = configureStore({
  reducer: {
    groups: groupsReducer,
    progress: progressReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

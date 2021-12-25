import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react'


const store = configureStore();
const persistor =  persistStore(store)

ReactDOM.render(
  <Provider store ={store} >
      <PersistGate 
      persistor ={persistor}
      loading={<div>Loading.......</div>}>
          <React.StrictMode>
              <App />
            </React.StrictMode>,
      </PersistGate>
  
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

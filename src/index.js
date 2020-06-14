import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './component/App';
import reducers from './reducers';


ReactDOM.render(
    // wrapp app component inside provider tag
    //it makes the Redux store available to the rest of your app:
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    // now any component inside our application can access redux 'store' object through <provider> tag
    document.getElementById('root')
);

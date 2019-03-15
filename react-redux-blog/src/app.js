import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import configStore from './redux/configStore';
import routes from './routes';
import DevTools from './redux/DevTools';

const store = configStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <div>
            {routes(history)}
            <DevTools />
        </div>
    </Provider>
), document.getElementById('root'));
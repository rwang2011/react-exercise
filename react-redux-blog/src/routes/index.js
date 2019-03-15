import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame';

const routes = (history) => (
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/detail/:id" component={Detail} />
        </Route>
    </Router>
);

export default routes;
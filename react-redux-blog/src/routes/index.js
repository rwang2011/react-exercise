import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame';
import List from '../views/List';

const routes = (history) => (
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/list" component={List}/>
        </Route>
    </Router>
);

export default routes;
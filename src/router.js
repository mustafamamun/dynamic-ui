import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { history, store } from './store.js';
import App from './components/App';
import DashboardContainer from './components/dashboard/DashBoardContainer';
import CaseDetailsContainer from './components/DetailsContainer/DetailsContainer';
import CaseListContainer from './components/ListContainer/ListContainer';
import CaseNewContainer from './components/NewContainer/NewContainer';
import AdminContainer from './components/admin/AdminContainer';
import NotFound from './components/NotFound/NotFound';

// build the router
const router = (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="cases" />
        <Route path="admin" component={AdminContainer} />
        <Route path="dashboard" component={DashboardContainer} />
        <Route path="cases" component={CaseListContainer} />
        <Route path="cases">
          <Route path="case">
            <Route path=":id" component={CaseDetailsContainer} />
          </Route>
        </Route>
        <Route path="addcase" component={CaseNewContainer} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

// export
export { router };

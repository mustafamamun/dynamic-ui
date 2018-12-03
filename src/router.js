import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { history, store } from './store';
import App from './components/App';
import HomeContainer from './components/HomeContainer/HomeContainer';
import CatalogContainer from './components/CatalogContainer/CatalogContainer';
import HowToOrder from './components/StaticPages/HowToOrder';
import HowToPay from './components/StaticPages/HowToPay';
import FAQ from './components/StaticPages/FAQ';
import TrackOrderContainer from './components/TrackOrderContainer/TrackOrderContainer';
import DetailsContainer from './components/DetailsContainer/DetailsContainer';
import UserLoginContainer from './components/UserLoginContainer/UserLoginContainer';
import SignUpContainer from './components/SignUpContainer/SignUpContainer';
import ContactContainer from './components/ContactContainer/ContactContainer';
import CartContainer from './components/CartContainer/CartContainer';
import NewContainer from './components/NewContainer/NewContainer';
import AdminContainer from './components/admin/AdminContainer';
import DashboardContainer from './components/dashboard/DashBoardContainer';
import NotFound from './components/StaticPages/NotFound';

// build the router
const router = (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="home" />
        <Route path="home" component={HomeContainer} />
        <Route path="catalog" component={CatalogContainer} />
        <Route path="how-to-order" component={HowToOrder} />
        <Route path="how-to-pay" component={HowToPay} />
        <Route path="faq" component={FAQ} />
        <Route path="track-order" component={TrackOrderContainer} />
        <Route path="account" component={UserLoginContainer} />
        <Route path="sign-up" component={SignUpContainer} />
        <Route path="contact" component={ContactContainer} />
        <Route path="cart" component={CartContainer} />
        <Route path="admin" component={AdminContainer} />
        <Route path="dashboard" component={DashboardContainer} />
        <Route path="item">
          <Route path="item">
            <Route path=":id" component={DetailsContainer} />
          </Route>
        </Route>
        <Route path="addItem" component={NewContainer} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

// export
export { router };

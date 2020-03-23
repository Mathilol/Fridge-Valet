/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/index';

import ProductNew from '../Product/index';
import Product from '../Product/ProductInfo';
import AppBar from '../AppBar/AppBar';

import GlobalStyle from '../../global-styles';
import ProductList from '../Product/ProductList';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="FridgeValet">
        <meta name="description" content="Webapp for products and shops" />
      </Helmet>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/addProduct" component={ProductNew} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/product/:id" component={Product} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

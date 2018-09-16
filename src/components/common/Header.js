import React from 'react';
import { Nav, NavItem, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import {navBarStyle} from '../../stylesheets/js/Header'

export default class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect style = {navBarStyle} inverse>
        <Navbar.Header>
          <Navbar.Brand> Dynamic UI </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse> 
          <Nav pullRight>
              <LinkContainer to={{
                pathname: '/home'
              }}>
                <NavItem>
                  <FontAwesome name="home"/> Home
                </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/catalog'
                }}>
                  <NavItem>
                    <FontAwesome name="book"/> View Catalog
                  </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/how-to-order'
                }}>
                  <NavItem>
                    <FontAwesome name="info-circle"/> How to Order
                  </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/how-to-pay'
                }}>
                  <NavItem>
                    <FontAwesome name="dollar"/> How to pay
                  </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/faq'
                }}>
                  <NavItem>
                    <FontAwesome name="question-circle"/> FAQ
                  </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/track-order'
                }}>
                  <NavItem>
                    <FontAwesome name="clock-o"/> Track order
                  </NavItem>
              </LinkContainer>
            <LinkContainer to={{
                  pathname: '/account'
                }}>
                  <NavItem>
                    <FontAwesome name="user"/> My Account
                  </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/sign-up'
                }}>
                  <NavItem>
                    <FontAwesome name="user"/> Sign Up
                  </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/contact'
                }}>
                  <NavItem>
                    <FontAwesome name="phone"/> Contact us
                  </NavItem>
              </LinkContainer>
              <LinkContainer to={{
                  pathname: '/cart'
                }}>
                  <NavItem>
                    <FontAwesome name="shopping-cart"/> Cart
                  </NavItem>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@fontsource/quicksand';
import '@fontsource/rock-salt';
import '@fontsource/josefin-sans';

// import { useStaticQuery, graphql } from "gatsby"

import Header from './header';
import Footer from './footer';
import Menu from './menu';
import Intro from '../sections/intro';

const Layout = ({ children }) => {

  
  

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React, { useState } from 'react';
import Layout from '../components/layouts/layout';
import Intro from '../components/sections/intro';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import LightningTalks from '../components/sections/lightning'
import Contact from '../components/sections/contact';
import { Helmet } from 'react-helmet';

import GlobalStyle from '../../GlobalStyle';

export default function Home() {
  


  return (
    <>
    <Helmet>
      <html lang="en" dir="ltr" />
      <meta charSet="utf-8" />
      <title>Karen Lobin Perkins' Portfolio</title>
      <link rel="canonical" href="https://www.karenlobinperkins.com" />
    </Helmet>
      <GlobalStyle />
      <Layout>
        <Intro />
        <About />
        <LightningTalks />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

import React, { Fragment } from 'react';

import Header from '../ui/Header/Header';
import Footer from '../ui/Footer/Footer';
import Sections from '../sections/Sections';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Sections />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Layout = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Layout;
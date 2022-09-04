import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
};

export default Layout;

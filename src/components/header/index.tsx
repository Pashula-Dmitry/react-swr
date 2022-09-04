import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <>
      <Link to="/">Main</Link>
      <Link to="/contacts">Contacts</Link>
    </>
  );
};

export default Header;

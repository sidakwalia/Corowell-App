import React from 'react';
import { Image } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
        <Image width="100" src={`${process.env.PUBLIC_URL}/logo.png`} />
    </header>
  );
}

export default Header;

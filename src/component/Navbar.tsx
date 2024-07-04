// Navbar.tsx

import React from 'react';
import { Link  as Navlink} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
        <h1><Navlink  to="/">Home</Navlink></h1>
    </nav>
  );
};

export default Navbar;

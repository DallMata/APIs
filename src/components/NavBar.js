import React, {Container} from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';




const NavBar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </Container>
  );
};

export default NavBar;

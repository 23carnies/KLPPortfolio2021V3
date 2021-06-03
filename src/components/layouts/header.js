import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { above, below, Flex, pink, pinkBlack, white } from '../utilities';
import Logo from '../../images/clearLogo.png';
import { Hamburger } from '../utilities/Icons';
import { ToggleBtn } from '../elements/buttons';
import { Sun, Moon } from '../utilities/Icons';



const Header = ({ setIsMenuOpen, isMenuOpen }) => {

  return (
    <Head>
      <Nav>
        <div>
          <Link to="/"><Img src={Logo} alt="KLP logo" /></Link>
        </div>
        <List>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#talks">Talks</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </List>
        <div>
          <Resume href="/resume.pdf">Résumé</Resume>
        </div>
        <div>
          <HamBtn onClick={() => setIsMenuOpen(!isMenuOpen)} onKeyDown={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu"><Hamburger /></HamBtn>
        </div>
      </Nav>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  top: 0;
  width: 100%;
  z-index: 15;
`;

const Nav = styled.nav`
  ${Flex({ ai: 'center', jc: 'space-around' })};
`;

const Img = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const List = styled.ul`
  ${Flex};
  ${below.medium`
        display: none;
    `}

  li {
    list-style-type: none;
  }

  a {
    font: 600 24px 'Quicksand', sans-serif;
    color: ${white};
    padding: 0 18px;
    & :hover {
      border-bottom: 3px solid ${pink};
    }
  }
`;

const Resume = styled.a`
  font: 600 24px 'Quicksand', sans-serif;
  color: ${white};
  padding: 0 18px;

  & :hover {
    border-bottom: 3px solid ${white};
  }
`;

const HamBtn = styled.button`
  border: none;
  background: transparent;
  ${above.medium`
    display: none;
  `}
`;

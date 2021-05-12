import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { above, below, Flex } from '../utilities';
import Logo from '../../images/clearLogo.png';
import { Hamburger } from '../utilities/Icons';
import { ToggleBtn } from '../elements/buttons';
import { Sun, Moon } from '../utilities/Icons';



const Header = ({ isMenuOpen, setIsMenuOpen, theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <Head>
      <Nav>
        <div style={{display: 'flex', alignItems:'center'}}>
          <Link to="/"><Img src={Logo} alt="KLP logo" /></Link>
          <a href="/">Karen Lobin Perkins</a>
        </div>
        <List>
          <li>
            <NavItem to="/#about">About</NavItem>
          </li>
          <li>
            <NavItem to="/#projects">Projects</NavItem>
          </li>
          <li>
            <NavItem to="/#talks">Talks</NavItem>
          </li>
          <li>
            <NavItem to="/#contact">Contact</NavItem>
          </li>
          <li>
            <NavItem href="/resume.pdf">Résumé</NavItem>
          </li>
        </List>
  
        <ToggleBtn onClick={toggleTheme} aria-hidden="true">
          {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
        </ToggleBtn>
        <div>
          <HamBtn onClick={toggleMenu} onKeyDown={toggleMenu} aria-label="Open Menu"><Hamburger /></HamBtn>
        </div>
      </Nav>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 15;
`;

const Nav = styled.nav`
  ${Flex({ ai: 'center', jc: 'space-around' })};
  background: transparent;
  /* background-color: ${props => props.theme.pageBackground}; */
  /* height: 13vh; */
`;

const Img = styled.img`
  width: 60px;
  border-radius: 50%;
`;

const List = styled.ul`
  ${Flex};
  ${below.medium`
        display: none;
    `}

  li {
    list-style-type: none;
    border-right: 2px solid white;
  }

  a {
    font: 600 24px 'Quicksand', sans-serif;
    color: white;
    padding: 0 18px;
    & :hover {
      border-bottom: 3px solid ${props => props.theme.tagLineColor};
    }
  }
`;

const NavItem = styled(Link)`
  color: white;
`;

const Resume = styled.a`
  font: 600 24px 'Quicksand', sans-serif;
  color: ${props => props.theme.fontColor};
  padding: 0 18px;

  & :hover {
    border-bottom: 3px solid ${props => props.theme.tagLineColor};
  }
`;

const HamBtn = styled.button`
  border: none;
  background: transparent;
  ${above.medium`
    display: none;
  `}
`;

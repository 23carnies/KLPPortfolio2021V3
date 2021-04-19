import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { above, below, Flex } from '../utilities';
import Logo from '../../images/clearLogo.png';
import { Hamburger } from '../utilities/Icons';
import { ToggleBtn } from '../elements/buttons';
import { Sun, Moon } from '../utilities/Icons';



const Header = ({ toggleMenu, theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');



  return (
    <Head>
      <Nav>
        <div>
          <Img src={Logo} alt="KLP logo" />
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
        <ToggleBtn onClick={toggleTheme}>
          {
            theme === 'light' ? <Moon /> : <Sun />
          }
          </ToggleBtn>

        <div>
          <HamBtn onClick={toggleMenu} ><Hamburger /></HamBtn>
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
  background-color: ${props => props.theme.pageBackground};
  height: 13vh;
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
    font: 24px 'Quicksand', sans-serif;
    color: ${props => props.theme.fontColor};
    padding: 0 18px;
    & :hover {
      border-bottom: 3px solid ${props => props.theme.tagLineColor};
    }
  }
`;

const Resume = styled.a`
  font: 24px 'Quicksand', sans-serif;
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

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Close } from '../utilities/Icons';
import { useSpring, animated } from 'react-spring';
import './menu.css';

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuAnime = useSpring({
    transform: isMenuOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`,
  });


  return (
    <animated.div style={menuAnime} className="nav-wrapper">
      <NavWrapper >
        <CloseBtn onClick={() => setIsMenuOpen(!isMenuOpen)} onKeyDown={() => setIsMenuOpen(!isMenuOpen)} aria-label="Close Menu">
          <Close />
        </CloseBtn>
        <List>
          <li>
            <NavItem onClick={() => setIsMenuOpen(!isMenuOpen)}  onKeyDown={() => setIsMenuOpen(!isMenuOpen)} to="/#about">
              About
            </NavItem>
          </li>
          <li>
            <NavItem onClick={() => setIsMenuOpen(!isMenuOpen)}  onKeyDown={() => setIsMenuOpen(!isMenuOpen)} to="/#projects">
              Projects
            </NavItem>
          </li>
          <li>
            <NavItem onClick={() => setIsMenuOpen(!isMenuOpen)}  onKeyDown={() => setIsMenuOpen(!isMenuOpen)} to="/#talks">
              Talks
            </NavItem>
          </li>
          <li>
            <NavItem onClick={() => setIsMenuOpen(!isMenuOpen)}  onKeyDown={() => setIsMenuOpen(!isMenuOpen)} to="/#contact">
              Contact
            </NavItem>
          </li>
        </List>

      </NavWrapper>
    </animated.div>
  );
};

export default Menu;

const NavWrapper = styled.div`

    background: ${props => props.theme.pageBackground};
    color: ${props => props.theme.fontColor};
`;

const CloseBtn = styled.button`
  margin-top: 50px;
`;

const List = styled.ul`
  li {
    list-style-type: none;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  font: 36px 'Quicksand', sans-serif;
  padding: 15px 0;
  margin: 80px auto;
  color: ${props => props.theme.titleColor};

  & :hover {
    border-bottom: 3px solid ${props => props.theme.tagLineColor};
  }
`;


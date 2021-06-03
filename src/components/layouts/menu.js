import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Close } from '../utilities/Icons';
import { useSpring, animated } from 'react-spring';
import './menu.css';
import { darkGrey, pink, pinkGrey, white } from '../utilities';

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

    background: radial-gradient(101.23% 226.86% at 105.57% 106.78%, rgba(183, 0, 139, 0.34) 10.42%, rgba(160, 22, 168, 0.958021) 84.25%), linear-gradient(123.03deg, rgba(255, 202, 67, 0.6) 6.71%, rgba(255, 211, 97, 0) 52.29%), #E76F2B;;
    color: ${white};
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
  color: ${darkGrey};

  & :hover {
    border-bottom: 3px solid ${pink}
  }
`;


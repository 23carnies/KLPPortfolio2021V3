import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Close } from '../utilities/Icons';
import { animated } from 'react-spring';
import './menu.css';

const Menu = ({ toggleMenu, menuAnime }) => {
  // const { isMenuOpen, setMenuOpen } = props;


  return (
    <animated.div style={menuAnime} className="nav-wrapper">
      <NavWrapper >
        <CloseBtn onClick={toggleMenu}>
          <Close />
        </CloseBtn>
        <List>
          <li>
            <NavItem onClick={toggleMenu} to="/#about">
              About
            </NavItem>
          </li>
          <li>
            <NavItem onClick={toggleMenu} to="/#projects">
              Projects
            </NavItem>
          </li>
          <li>
            <NavItem onClick={toggleMenu} to="/#contact">
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


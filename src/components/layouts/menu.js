import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import { Close } from '../utilities/Icons';
import { black } from '../utilities';

const Menu = ({isNavOpen, setNavOpen}) => {
    const menuAnime = useSpring({
        transform: isNavOpen
        ? `translate3d(0,0,0) scale(1)`
        : `translate3d(100%,0,0) scale(0.6)`,
    });

    return (
        <animated.div style={menuAnime}>
            <button onClick={() => setNavOpen(false)}>
                <Close />
            </button>
            <List>
                <li><NavItem onClick={() => setNavOpen(false)} to="/#about">About</NavItem></li>
                <li><NavItem onClick={() => setNavOpen(false)} to="/#projects">Projects</NavItem></li>
                <li><NavItem onClick={() => setNavOpen(false)} to="/#contact">Contact</NavItem></li>
            </List>
        </animated.div>
    )
}

export default Menu;

const List = styled.ul`
    list-style-type: none;
    li {

    }
    `;

export const NavItem = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 20px;
`;
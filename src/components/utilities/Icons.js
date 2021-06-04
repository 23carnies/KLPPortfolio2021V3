import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { FaRegFilePdf } from '@react-icons/all-files/fa/FaRegFilePdf';
import { BiMailSend } from '@react-icons/all-files/bi/BiMailSend';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { BiMoon } from '@react-icons/all-files/bi/BiMoon';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiW3C } from '@react-icons/all-files/si/SiW3C';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiStyledComponents } from '@react-icons/all-files/si/SiStyledComponents';
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql';
import { BsDot } from '@react-icons/all-files/bs/BsDot';
import { IoIosSend } from '@react-icons/all-files/io/IoIosSend';
import { IoIosOpen } from '@react-icons/all-files/io/IoIosOpen';

import { IconContext } from '@react-icons/all-files/';
import { white, box_shadow2, Flex, below } from '../utilities';
import styled, { css } from 'styled-components';

//Send
export const Send = () => {
  return (
    <IconContext.Provider
      value={{ size: '15px', color: `${white}` }}
    >
      <IoIosSend />
    </IconContext.Provider>
  );
};


//Hamburger and X
export const Close = () => {
  return (
    <IconContext.Provider
      value={{ size: '30px', color: `${white}` }}
    >
      <AiOutlineClose />
    </IconContext.Provider>
  );
};
export const Hamburger = () => {
  return (
    <IconContext.Provider
      value={{ size: '30px', color: 'white' }}
    >
      <GiHamburgerMenu />
    </IconContext.Provider>
  );
};
//Sun and Moon
export const Sun = () => {
  return (
    <IconContext.Provider value={{ size: '30px', color: 'white' }}>
      {/* <IconCircle bkColor='yellow'> */}
        <FiSun />
      {/* </IconCircle> */}
    </IconContext.Provider>
  );
};
export const Moon = () => {
  return (
    <IconContext.Provider value={{ size: '30px', color: 'white' }}>
      {/* <IconCircle bkColor="moon"> */}
        <BiMoon />
      {/* </IconCircle> */}
    </IconContext.Provider>
  );
};
// Links to 
export const LgGithub = () => {
  return (
    <IconContext.Provider value={{ size: '45px', color: `${white}` }}>
      {/* <IconCircle bkColor="git"> */}
        <FiGithub />
      {/* </IconCircle> */}
    </IconContext.Provider>
  );
};
export const SmGithub = () => {
  return (
    <IconContext.Provider value={{ size: '15px', color: `${white}` }}>
        <FiGithub />
    </IconContext.Provider>
  );
};
export const LgLinkedIn = () => {
  return (
    <IconContext.Provider value={{ size: '45px', color: `${white}` }}>
      {/* <IconCircle bkColor="link"> */}
        <AiOutlineLinkedin />
      {/* </IconCircle> */}
    </IconContext.Provider>
  );
};
export const LgPDF = () => {
  return (
    <IconContext.Provider value={{ color: `${white}`, size: '45px' }}>
      {/* <IconCircle bkColor="res"> */}
        <FaRegFilePdf />
      {/* </IconCircle> */}
    </IconContext.Provider>
  );
};
export const LgMail = () => {
  return (
    <IconContext.Provider value={{ size: '45px', color: `${white}` }}>
      <IconCircle>
        <BiMailSend />
      </IconCircle>
    </IconContext.Provider>
  );
};
export const SmOpen = () => {
  return (
    <IconContext.Provider value={{ size: '15px', color: `${white}` }}>
        <IoIosOpen />
    </IconContext.Provider>
  );
};

// Developer Icons
export const ReactLogo = () => {
  return (
    <IconContext.Provider
      value={{ size: '45px', color: 'white' }}>
      <FaReact />
    </IconContext.Provider>
  );
};
export const Css3 = () => {
  return (
    <IconContext.Provider
      value={{ size: '45px', color: 'white' }}>
      <SiCss3 />
    </IconContext.Provider>
  );
};
export const W3c = () => {
  return (
    <IconContext.Provider
      value={{ size: '45px', color: 'white' }}>
      <SiW3C />
    </IconContext.Provider>
  );
};
export const JavaScript = () => {
  return (
    <IconContext.Provider
      value={{ size: '45px', color: 'white' }}>
      <SiJavascript />
    </IconContext.Provider>
  );
};
export const Dot = () => {
  return (
    <IconContext.Provider
      value={{ size: '45px', color: 'white' }}>
      <BsDot />
    </IconContext.Provider>
  );
};
export const StyledComponents = () => {
  return (
    <IconContext.Provider
      value={{ size: '45px', color: 'white' }}>
      <SiStyledComponents />
    </IconContext.Provider>
  );
};
export const GraphQL = () => {
  return (
    <IconContext.Provider
      value={{ size: '45px', color: 'black' }}>
      <SiGraphql />
    </IconContext.Provider>
  );
};

export const IconCircle = styled.div`
  background: ${({ bkColor }) =>
    bkColor === 'git' ? '#6e5494' : bkColor === 'link' ? '#0072b1' : bkColor === 'res' ? '#ed2224' : bkColor === 'sun' ? 'yellow' : bkColor === 'moon' ? '#FFEEDD' : 'orange'};
  /* background-color: ${props => props.bkColor || 'orange'}; */
  border-radius: 50%;
  box-shadow: ${box_shadow2};
  width: 80px;
  height: 80px;
  ${Flex};
  margin: 30px;
  border: 1px solid white;
  ${below.large`
      margin: 20px;
    `}
  ${below.medium`
        width: 60px;
        height: 60px;
    `}
    ${below.small`
        width: 80px;
        height: 80px;
    `}

    ${props =>
    props.contact &&
    css`
      margin: 20px;
      ${below.large`
          margin: 15px;
        `}
    `}
`;

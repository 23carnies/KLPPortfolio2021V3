import React, { useState } from 'react';
import { Section } from '../layouts/section';
import Menu from '../layouts/menu'
import { below, Flex } from '../utilities';
import { Heading, SubHeading } from '../elements/headings';
import styled from 'styled-components';
import Iceland from '../../images/klo-iceland.jpg';
import { Btn } from '../elements/buttons';
import { Css3, Dot, JavaScript, ReactLogo, StyledComponents, W3c } from '../utilities/Icons';
import Header from '../layouts/header';

const Intro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SectionIntro>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <TextBox>
          <Headline>Hi! I'm Karen</Headline>
          <SubHeadLine>
            I am a software engineer based in Atlanta, focused on Front End design
            in <b>ReactJS</b>, <b>useability</b>, and <b>accessability</b>.
          </SubHeadLine>
        <See href="/#projects">See My Work</See>
        </TextBox>
        <LogosBox>
          <ReactLogo/>
          <Dot />
          <Css3 />
          <Dot />
          <W3c />
          <Dot />
          <JavaScript />
          <Dot />
          <StyledComponents />
        </LogosBox>
    </SectionIntro>
  );
};

export default Intro;

const SectionIntro = styled(Section)`
  width: 100vw;
  background: radial-gradient(101.23% 226.86% at 105.57% 106.78%, rgba(183, 0, 139, 0.34) 10.42%, rgba(160, 22, 168, 0.958021) 84.25%), linear-gradient(123.03deg, rgba(255, 202, 67, 0.6) 6.71%, rgba(255, 211, 97, 0) 52.29%), #E76F2B;
  mix-blend-mode: multiply;
  ${Flex({fd:'column', ai:'flex-end'})};
  padding-bottom: 2%;
  ${below.small`
    ${Flex({fd:'column', ai:'flex-end'})};
  `}
  ${below.xXSmall`
    padding-bottom: 5%;
  `}
`;

const See = styled.a`
  color: white;
  text-align: center;
  padding: 1%;
  border: 1px solid white;
  border-radius: 10px;
  padding: 1% 2%;
  margin: 1% 0 2%;
`;

const Headline = styled(Heading)`
  color: white;
  font-weight: 700;
  text-align: left;
  margin: 0;
  
`;
const SubHeadLine = styled(SubHeading)`
  font-weight: 400;
  color: white;
  text-align: left;
  padding: 0;
  line-height: 2rem;
  margin: 0 0 20px 0;
  ${below.small`
    line-height: 1.5rem;
    margin: 10px 0;
    font-size: 20px;
  `}
`;

const TextBox = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2%;
  ${below.small`
    width: 80%;
    padding: 0 1%;
  `}
`;

const LogosBox = styled.div`
  padding: 3% 10%;
  ${below.xXSmall`
    display: none;
  `}
`;

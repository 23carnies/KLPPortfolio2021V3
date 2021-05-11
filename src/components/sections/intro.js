import React from 'react';
import { Section } from '../layouts/section';
import { below, Flex } from '../utilities';
import { Heading, SubHeading } from '../elements/headings';
import styled from 'styled-components';
import Iceland from '../../images/klo-iceland.jpg';
import { Btn } from '../elements/buttons';
import { Css3, Dot, JavaScript, ReactLogo, StyledComponents, W3c } from '../utilities/Icons';
import Header from '../layouts/header';

const Intro = () => {
  return (
    <SectionIntro>
      <Header />
      {/* <Image src={Iceland} alt="Karen in Iceland" /> */}
      <TextBox>
        <Headline>Hi! I'm Karen</Headline>
        <SubHeadLine>
          I am a software engineer based in Atlanta, focused on Front End design
          in ReactJS, useability, and accessability.
        </SubHeadLine>
      </TextBox>
      <button>See My Work</button>
      <div>
        <ReactLogo/>
        <Dot />
        <Css3 />
        <Dot />
        <W3c />
        <Dot />
        <JavaScript />
        <Dot />
        <StyledComponents />

      </div>
    </SectionIntro>
  );
};

export default Intro;

const Headline = styled(Heading)`
  color: white;
  text-align: right;
`;
const SubHeadLine = styled(SubHeading)`
  color: white;
  text-align: right;
`;

const SectionIntro = styled(Section)`
  background-image: url(${Iceland});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${Flex({fd:'column'})};
  border-bottom: 10px solid ${props => props.theme.tagLineColor};
  padding-bottom: 2%;
  ${below.small`
    ${Flex({fd:'column'})};
  `}
`;

// const Image = styled.img`
//   border-radius: 60%;
//   width: 30%;
//   margin: 1%;
//   border: 2px inset ${props => props.theme.pageBackground};
//   ${below.small`
//     width: 80%;
//     margin: 5% 0;
//   `}
// `;

const TextBox = styled.div`
  width: 50%;
  padding: 2%;
  ${below.small`
    width: 80%;
    padding: 0 1%;
  `}
`;



import React from 'react';
import styled from 'styled-components';
import { Flex, text, below } from '../utilities';
import { Section } from '../layouts/section';
import { SubHeading } from '../elements';
import Iceland from '../../images/klo-iceland.jpg'

const About = () => {
  return (
    <Section id="about">
      <Box>
          <SubHeading>About</SubHeading>
          <Hr/>
          <Img src={Iceland} alt="Karen in Iceland" />
          <AboutText>
            From my earliest memories, I’ve always loved to learn. I taught
            myself to play guitar and built a car from scratch with my father as
            a teenager. I enjoy DIYing and cooking, both allowing my creative
            side to flourish. I’ve studied multiple human languages and I picked
            up HTML and CSS in college. For years I built sites for family and
            friends until deciding to pivot my career to software development.{' '}
          </AboutText>
          <AboutText>
            A recent graduate of the Software Engineering Immersive at General
            Assembly, I am experienced in modern web design. Skilled in pure CSS
            and several frameworks, I build alluring sites and apps with great
            functionality.
          </AboutText>
          <AboutText>
            I have a passion for rowing, a sport of focus and dedication. I
            bring these skills with me to every project. With a fondness for
            spoken languages, travel, and fitness, I want to see the world; and
            see what positive change I can be in it.
          </AboutText>
      </Box>
    </Section>
  );
};

export default About;

const Box = styled.div`
  ${Flex({ fd:'column' })}
  width: 100%;
  ${below.large`
        ${Flex({ fd: 'row', fw: 'wrap' })};
    `}
`;

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.fontColor};
`;

const AboutText = styled.p`
  max-width: 90%;
  /* ${below.large`
        font-size: 1.5rem;
    `} */
`;

const Hr = styled.hr`
    margin-top: 10%;
    border: 1px solid #ccc;
    width: 65%;
`;
import React from 'react';
import styled from 'styled-components';
import { Flex, text, below, darkGrey } from '../utilities';
import { Section } from '../layouts/section';
import { SubHeading } from '../elements';
import Iceland from '../../images/klo-iceland.jpg';

const About = () => {
  return (
    <Section id="about">
      <Box>
        <Title>About</Title>
        <Hr />
        <InnerBox>
          <Img src={Iceland} alt="Karen in Iceland" />
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0 5%' }}>
            <AboutText>
              From my earliest memories, I’ve always loved to learn. I taught
              myself to play guitar and built a car from scratch with my father
              as a teenager. I enjoy DIYing and cooking, both allowing my
              creative side to flourish. I’ve studied multiple languages (spoken and written)
              and I picked up HTML and CSS in college. For years I built sites
              for family and friends until deciding to pivot my career to
              software development.
            </AboutText>
            <AboutText>
              I am passionate about modern web design. I excel at front end design in pure
              CSS, ReactJS, and vanilla JavaScript. On the back end, I work in Node.js and am adept 
              with REST and GraphQL APIs. I build alluring sites and apps with
              great functionality.

            </AboutText>
            <AboutText>
              I have a keenness for rowing, a sport of focus and dedication. I
              bring these skills with me to every coding project I develop. With a fondness for
               travel, and fitness, I want to see the world
              and see what positive change I can be in it.
            </AboutText>
          </div>
        </InnerBox>
      </Box>
    </Section>
  );
};

export default About;

const Title = styled(SubHeading)`
  margin-top: 20px;
`;

const Box = styled.div`
  ${Flex({ fd: 'column' })}
  width: 90%;
  ${below.medium`
      ${Flex({ fd: 'row', fw: 'wrap' })};
    `}
`;

const InnerBox = styled.div`
  ${Flex({alignItems:'center'})};
  ${below.medium`
    ${Flex({fd:'column'})};
  `}
`;

const Img = styled.img`
  width: 25%;
  max-width: 500px;
  border-radius: 50%;
  border: 1px solid ${darkGrey};
  margin: 2% 2% 2% 5%;
  ${below.xLarge`
    margin: 1% 1% 1% 3%;
  `}
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 36px;
  padding: 0 1%;
  ${below.xLarge`
        font-size: 1.2rem;
        padding: 0;
        line-height: 30px;
    `}
  ${below.large`
        font-size: 1rem;
        line-height: 24px;
    `}
`;

const Hr = styled.hr`
  margin-top: 1%;
  border: 1px solid #ccc;
  width: 95%;
  ${below.medium`
      margin-top: 2%;
    `}
`;

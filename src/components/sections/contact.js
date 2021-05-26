import React from 'react';
import styled from 'styled-components';
import ContactMe from '../layouts/emailjs';
import { Section } from '../layouts/section';
import { title, below } from '../utilities';
import { SubHeading } from '../elements/headings';


const Contact = props => {
  return (
    <Section id="contact">
      <Hr />
      <SubHeading>Let's work together!</SubHeading>
      <SubHeadLine>I am actively interviewing and looking for a Software Engineering
role at a team-focused company.</SubHeadLine>
      <ContactMe />
    </Section>
  );
};

export default Contact;

const Hr = styled.hr`
    border: 1px solid #ccc;
    width: 90%;
`;

const SubHeadLine = styled(SubHeading)`
  margin: 0 auto;
  text-align: center;
  padding: 2%;
`;
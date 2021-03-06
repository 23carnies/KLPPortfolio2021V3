import React from 'react';
import styled from 'styled-components';
import { Flex, below, white } from '../utilities';
import { Dot, LgGithub, LgLinkedIn, LgPDF } from '../utilities/Icons';

const Footer = () => {

  return (
    <Foot>
      <FootDiv>
        <LinkItem
          rel="noreferrer"
          title="Github"
          target="_blank"
          href="https://github.com/23carnies"
          aria-label="Github logo, opens new window to Karen's Github page"
        >
          <LgGithub />
        </LinkItem>
        <Dot />
        <LinkItem
          rel="noreferrer"
          title="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/karen-lobin-perkins/"
          aria-label="LinkedIn logo, opens new window to Karen's LinkedIn page"
        >
          <LgLinkedIn />
        </LinkItem>
        <Dot />
        <LinkItem
          rel="noreferrer"
          title="Resume"
          target="_blank"
          href="http://23carnies.com/karenLobinPerkinsRes.pdf"
          aria-label="link to Karen's resume in pdf format, opens new window"
        >
          <LgPDF />
        </LinkItem>
      </FootDiv>
      <FootP>
        © {new Date().getFullYear()} Karen Lobin Perkins
        {/* , Built with {` `} */}
      </FootP>
    </Foot>
  );
};

export default Footer;

const Foot = styled.footer`
  background: radial-gradient(101.23% 226.86% at 105.57% 106.78%, rgba(183, 0, 139, 0.34) 10.42%, rgba(160, 22, 168, 0.958021) 84.25%), linear-gradient(123.03deg, rgba(255, 202, 67, 0.6) 6.71%, rgba(255, 211, 97, 0) 52.29%), #E76F2B;
  mix-blend-mode: multiply;
  ${Flex({ ai: 'center' })};
  max-height: 150px;
  ${below.small`
      ${Flex({ fd: 'column' })};
      max-height: 150px;
    `}
`;

const FootDiv = styled.div`
  padding-left: 5%;
  ${Flex({ jc: 'center' })};
  ${below.small`
    margin: 0 auto;
  `}
`;

const LinkItem = styled.a`
  margin: 18% 0 10%;
`;

const FootP = styled.p`
  color: ${white};
  margin: 50px 30px 0 auto;
  ${below.medium`
      font-size: .7rem;
    `}
  ${below.small`
      margin: -25px 0 0;
      padding-bottom: 10px;
    `}
`;

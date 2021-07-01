import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../layouts/cards/projectCard';
import { Section } from '../layouts/section';
import { Flex, title, below, text } from '../utilities';
import { Headline, SubHeading } from '../elements/headings';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              alt
              gitLink
              image
              info
              openLink
              sub
              tech
              title
              other
            }
          }
        }
      }
    }
  `);

  const highlights = data.allMarkdownRemark.edges.filter(({ node }) => node);

  return (
    <Section id="projects">
      <Hr />
      <SubHeading>Projects</SubHeading>
      <Note>Click card for more info</Note>
      <Note>
        Some projects are hosted on heroku and may take several seconds to load.
      </Note>
      <CardGroup>
        {highlights &&
          highlights.map(({ node }, idx) => {
            const { frontmatter } = node;
            const {
              alt,
              gitLink,
              image,
              info,
              openLink,
              sub,
              tech,
              title,
              other,
            } = frontmatter;
            return (
              <ProjectCard
                key={idx}
                title={title}
                sub={sub}
                description={other}
                image={image}
                openLink={openLink}
                gitLink={gitLink}
                alt={alt}
                info={info}
              />
            );
          })}
      </CardGroup>
    </Section>
  );
};

export default Projects;

export const Note = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 0 2%;
  margin: 0.5%;
`;

export const CardGroup = styled.section`
  ${Flex({ fw: 'wrap' })};
  width: 1400px;
  ${below.xLarge`
      width: 1180px;
  `}
  ${below.medium`
      width: 700px;
  `}
`;

const Hr = styled.hr`
    border: 1px solid #ccc;
    width: 95%;
`;
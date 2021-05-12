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
            }
            excerpt
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
      <p>Click card for more info</p>
      <Note>
        Some projects are hosted on heroku and may take several seconds to load.
      </Note>
      <CardGroup>
        {highlights &&
          highlights.map(({ node }, idx) => {
            const { excerpt, frontmatter } = node;
            const {
              alt,
              gitLink,
              image,
              info,
              openLink,
              sub,
              tech,
              title,
            } = frontmatter;
            return (
              <ProjectCard
                key={idx}
                title={title}
                sub={sub}
                description={excerpt}
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

export const SubLine = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.tagLineColor};
`;

export const Note = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 0 2%;
`;

export const CardGroup = styled.section`
  ${Flex({ fw: 'wrap' })};
  max-width: 1400px;
  ${below.xLarge`
        max-width: 1280px;
    `}
`;

const Hr = styled.hr`
    border: 1px solid #ccc;
    width: 95%;
`;
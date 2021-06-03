import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import LightningCard from '../layouts/cards/lightningCard';
import { Section } from '../layouts/section';
import { CardGroup, Note } from '../sections/projects';
import { SubHeading } from '../elements';
import styled from 'styled-components';

const LightningTalks = () => {
  const data = useStaticQuery(graphql`
    query lightning {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/lightningTalks/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              link
              image
              alt
              video
            }
            excerpt
          }
        }
      }
    }
  `);
 
 const talks = data.allMarkdownRemark.edges.filter(({ node }) => node);
 
 return (
    <Section id="talks">
        <Hr />
        <SubHeading>Talks</SubHeading>
        <Note>Short presentations to teach designers and fellow engineers about topics I'm currently learning.</Note>
        <CardGroup>
            {talks && talks.map(({ node }, idx) => {
                const { excerpt, frontmatter } = node;
                const { title, link, image, alt, video } = frontmatter;
                return (
                    <LightningCard 
                      key={idx}
                      title={title}
                      description={excerpt}
                      image={image}
                      link={link}
                      alt={alt}
                      video={video}
                    />
                )
            })}
        </CardGroup>
    </Section>
     )
};

export default LightningTalks;

const Hr = styled.hr`
    /* margin-top: 10%; */
    border: 1px solid #ccc;
    width: 90%;
`;
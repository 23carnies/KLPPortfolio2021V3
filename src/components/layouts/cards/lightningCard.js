import React from 'react';
import styled from 'styled-components';
import { Flex, below, pinkBlack, darkGrey } from '../../utilities';
import { HTwo, Pgraph } from './projectCard';

const LightningCard = ({ title, link, image, alt, description, video }) => {
  return (
    <Card>
      <Video
        src={video}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Video>
      <CardBody>
        <Title>{title}</Title>
        <Descrip>{description}</Descrip>
      </CardBody>
    </Card>
  );
};

export default LightningCard;

const Card = styled.div`
  ${Flex({ fd: 'column' })};
  width: 400px;
  border-radius: 8px;
  margin: 25px;
  border: 1px solid ${pinkBlack};
  ${below.xSmall`
      width: 400px;
    `}
  ${below.xXSmall`
      width: 360px;

    `};
`;

const Video = styled.iframe`
  aspect-ratio: 4/3;
  width: 400px;
  /* height: 315px; */
  border: none;
  border-radius: 8px 8px 0 0;
  /* ${below.xSmall`
      width: 400px;
      // height: 300px;
    `} */
  ${below.xXSmall`
      width: 360px;

    `}
`;

const CardBody = styled.div`
  /* background-color: ${darkGrey}; */
  /* height: 220px; */
  /* ${below.small`
      height: 200px;
    `}; */
`;

const Title = styled(HTwo)`
  font: 700 28px 'Josefin Sans', sans-serif;
  margin-top: 4%;
  ${below.small`
      margin-top: 3%;
    `};
  ${below.xSmall`
       margin-top: 5%;
    `}
`;

const Descrip = styled(Pgraph)`
  font-size: 18px;
  margin: 5px;
`;

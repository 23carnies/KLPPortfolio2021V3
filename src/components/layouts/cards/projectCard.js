import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Btn } from '../../elements/buttons';

import { Flex, below, grey, pinkBlack, white, darkGrey, background } from '../../utilities';
import { SmGithub, SmOpen } from '../../utilities/Icons';

const ProjectCard = ({
  title,
  sub,
  description,
  image,
  openLink,
  gitLink,
  alt,
  info,
}) => {
  const [cardFlip, setCardFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: cardFlip === false ? 1 : 0,
    transform: `perspective(600px) rotateX(${cardFlip === false ? 180 : 0}deg)`,
    config: { mass: 4, tension: 300, friction: 39 },
  });

  return (
    <div onClick={() => setCardFlip(!cardFlip)} onKeyDown={() => setCardFlip(!cardFlip)} >
      <animated.div
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          position: 'absolute',
        }}
      >
        <CardFront>
          <Image src={image} alt={alt} />
          <HTwo>{title}</HTwo>
          <HThree>{sub}</HThree>
        </CardFront>
      </animated.div>

      <animated.div
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <CardBack>
          <Pgraph>{description}</Pgraph>
          <Pgraph>{info}</Pgraph>
          <div style={{ margin: 'auto 15px 35px' }}>
            <Btn
              type="open"
              href={openLink}
              target="_blank"
              rel="noreferrer"
              alt="opens new window to "
            >
              Open <SmOpen />
            </Btn>
            <Btn
              href={gitLink}
              target="_blank"
              rel="noreferrer"
              alt="opens new window to "
            >
              Github <SmGithub />
            </Btn>
          </div>
        </CardBack>
      </animated.div>
    </div>
  );
};

export default ProjectCard;

export const CardFront = styled.div`
  ${Flex({ fd: 'column' })};
  margin: 3%;
  width: 500px;
  height: 500px;
  border: 1px inset ${grey};
  border-radius: 5px;
  background: ${grey};
  ${below.small`
    width: 400px;
    height: 400px;
  `}
`;

export const CardBack = styled(CardFront)`

`;

export const Image = styled.img`
  width: 85%;
  border-radius: 5px;
`;

export const Pgraph = styled.p`
  font: 400 20px 'Quicksand', sans-serif;
  text-align: center;
  line-height: 24px;
  margin: 30px 5px 5px;
  color: ${darkGrey};
`;

export const HTwo = styled.h2`
  font: 700 20px 'Roboto Mono', monospace;
  margin: 5px;
  color: ${pinkBlack};
`;

export const HThree = styled.h3`
  font: 400 18px 'Lato', Helvetica, sans-serif;
  margin: 0;
`;
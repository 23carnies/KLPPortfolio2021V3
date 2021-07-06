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
          <TextBox>
            <HTwo>{title}</HTwo>
            <HThree>{sub}</HThree>

          </TextBox>
        </CardFront>
      </animated.div>

      <animated.div
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <CardBack>
          <Pgraph>{description}</Pgraph>
          <Pgraph>{info}</Pgraph>
          <BtnBox>
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
          </BtnBox>
        </CardBack>
      </animated.div>
    </div>
  );
};

export default ProjectCard;

export const CardFront = styled.div`
  ${Flex({ fd: 'column',jc:'flex-start' })};
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
  width: 100%;
  border-radius: 5px;
`;

export const Pgraph = styled.p`
  font: 400 20px 'Lato', sans-serif;
  text-align: center;
  line-height: 24px;
  margin: 30px;
  color: ${darkGrey};
`;

export const TextBox = styled.div`
  margin: -100px;
  z-index: 50;
  background: radial-gradient(101.23% 226.86% at 105.57% 106.78%, rgba(183, 0, 139, 0.34) 10.42%, rgba(160, 22, 168, 0.958021) 84.25%), linear-gradient(123.03deg, rgba(255, 202, 67, 0.6) 6.71%, rgba(255, 211, 97, 0) 52.29%), #E76F2B;
  width: 100%;
`;

export const HTwo = styled.h2`
  font: 700 20px 'Roboto Mono', monospace;
  color: ${white};
  text-align: center;
  margin-bottom: 5px;
`;

export const HThree = styled.h3`
  font: 400 18px 'Lato', Helvetica, sans-serif;
  text-align: center;
  margin-top: 5px;
  color: ${white};
`;

export const BtnBox = styled.div`
  margin: auto 35px 15px;
  ${Flex};
`;
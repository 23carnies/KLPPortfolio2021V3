import styled from 'styled-components';
import { below, above, darkGrey, pinkBlack, pink } from '../utilities';

export const Heading = styled.h1`
  color: ${darkGrey};
  font: 700 3.5rem 'Quicksand', sans-serif;
  ${above.large`
    font-size: 4.5rem;
    `}
  /* ${above.xSmall`
    font-size: 4.5rem;
    `} */
  ${below.small`
    font-size: 2rem;
    line-height: 1rem;
    margin: 1rem 0;
  `}
`;

export const SubHeading = styled.h2`
  color: ${pinkBlack};
  font: 700 28px 'Quicksand', sans-serif;
  line-height: 1.4;
  padding: 0 3%;
  ${below.small`
    font-size: 24px;
  `}
`;

export const Headline = styled.h3`
  text-align: center;
  color: ${pink};
  margin: 2.5% 1% 1%;
  ${below.large`
        font-size: 2.4rem;
    `}
  ${below.medium`
        font-size: 2rem;
        margin-top: 4%;
    `}
`;

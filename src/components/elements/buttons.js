import styled from 'styled-components';
import { box_shadow1, box_shadow4, pink, white, pinkBlack } from '../utilities';

export const Btn = styled.a`
  width: 108px;
  height: 50px;
  margin: 10px;
  padding: 10px 20px;
  box-shadow: ${box_shadow4};
  border: 1px solid ${white};
  border-radius: 5px;
  font-weight: bold;
  

  color: ${white};
  background: ${pink};

  &:hover {
    background: ${pinkBlack};
    box-shadow: ${box_shadow1};
  }
  transition: all 0.4s ease;
`;

export const ToggleBtn = styled.button`
  background: transparent;
  border: none;
`;

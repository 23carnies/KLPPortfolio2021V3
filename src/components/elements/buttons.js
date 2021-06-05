import styled from 'styled-components';
import { box_shadow1, box_shadow4, pink, white, background, box_shadow2, pinkBlack } from '../utilities';

export const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  height: 50px;
  margin: 10px;
  padding: 10px 20px;
  box-shadow: ${box_shadow4};
  border: 1px solid ${white};
  border-radius: 5px;
  font-weight: bold;
  border: 1px inset ${pinkBlack};

  color: ${white};
  background: ${pink};

  &:hover {
    opacity: .8;
    box-shadow: ${box_shadow2};
    border: .05px inset ${pinkBlack};
  }
  transition: all 0.4s ease;
`;

export const ToggleBtn = styled.button`
  background: transparent;
  border: none;
`;

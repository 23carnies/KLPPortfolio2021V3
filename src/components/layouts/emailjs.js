import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Wrapper, Input, Label } from '../elements/floatingInput';

import {
  Flex,
  smLabel,
  label,
  box_shadow4,
  btn_active,
  below,
  above,
} from '../utilities';

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'process.env.YOUR_SERVICE_ID',
        'process.env.YOUR_TEMPLATE_ID',
        e.target,
        'process.env.YOUR_USER_ID'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <Form onSubmit={sendEmail}>
      {/* <Input type="hidden" name="contact_number" /> */}
      <Wrapper>
        <Label>Name</Label>
        <Input type="text" name="user_name" />
      </Wrapper>
      <Wrapper>
        <Label>Email</Label>
        <Input type="email" name="user_email" />
      </Wrapper>
      <Wrapper>
        <Label>Message</Label>
        <Input name="message" />
      </Wrapper>
        {/* <Input type="submit" value="Send" /> */}

    </Form>
  );
}

const Form = styled.form`
  ${Flex({ fd: 'column' })};
  padding: 15px;
  width: 100%;
`;

// const Input = styled.input`
//   max-width: 750px;
//   width: ${({ type }) => (type === 'submit' ? '13%' : '50%')};
//   background: ${({ type }) =>
//     type === 'submit'
//       ? `${props => props.theme.button}`
//       : `${props => props.theme.titleColor}`};
//   font: ${label};
//   padding: 1%;
//   margin: 1.23%;
//   border-radius: ${({ type }) => (type === 'submit' ? '12px' : '5px')};
//   box-shadow: ${({ type }) => (type === 'submit' ? `${box_shadow4}` : 'none')};
//   ${above.medium`
//     font-size: 1.2rem;
//     padding: .8%;
//   `}
//   ${below.xLarge`
//       max-width: 650px;
//     `}
//   ${below.large`
//       max-width: 500px;
//     `}
//     ${below.medium`
//       font: ${smLabel};
//       padding: 0.8%;
//       width: ${({ type }) => (type === 'submit' ? '23%' : '90%')};
//     `}
//     :hover {
//     box-shadow: ${({ type }) => (type === 'submit' ? `${btn_active}` : 'none')};
//   }
// `;

// const Label = styled.label`
//   color: ${props => props.theme.fontColor};
//   font: ${label};
//   ${below.medium`
//       font: ${smLabel};
//     `}
// `;

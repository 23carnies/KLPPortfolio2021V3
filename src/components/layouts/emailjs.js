import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';
import { Send } from '../utilities/Icons';
import { Btn } from '../elements/buttons';

import {
  Flex,
  smLabel,
  label,
  box_shadow2,
  white,
  below,
  above,
  pinkBlack,
  pink,
  grey,
} from '../utilities';

export default function ContactMe() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fp4x07k',
        'template_hcdqfjl',
        e.target,
        'user_dBWjognYia9FPfnHZyQpN'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }

  return (
    <Form onSubmit={sendEmail}>
      <Input type="hidden" name="contact_number" />
      <Label>Name</Label>
      <Input
        type="text"
        name="from_name"
        required
        minLength="2"
        maxLength="45"
        placeholder="Jane Fernandez"
      />
      <Label>Email</Label>
      <Input
        type="email"
        name="reply_to"
        required
        placeholder="name@email.com"
      />
      <Label>Message</Label>
      <Textarea
        name="message"
        required
        placeholder="Hello..."
      />
      <Btn><Input type="submit" value="Send" /><Send /></Btn>
    </Form>
  );
}

const Form = styled.form`
  ${Flex({ fd: 'column' })};
  padding: 15px;
  width: 100%;
`;

const Input = styled.input`
  width: 750px;
  max-width: 50%;
  background: ${({type}) => (type === 'submit' ? 'none' : `${grey}`)};
  border: ${({type}) => (type === 'submit' ? 'none' : `1px inset ${pinkBlack}`)};
  color: ${({type}) => (type === 'submit' ? `${white}` : `${pinkBlack}`)};
  font: ${label};
  padding: 1%;
  margin: 1.23%;
  border-radius: 5px;
  ${above.medium`
    font-size: 1.2rem;
    padding: .8%;
  `}
  ${below.xLarge`
      max-width: 650px;
    `}
  ${below.large`
      max-width: 500px;
    `}
  ${below.medium`
    font: ${smLabel};
    padding: 0.8%;
    max-width: 90%;
  `}
`;

const Textarea = styled.textarea`
  width: 750px;
  max-width: 50%;
  background: ${grey};
  font: ${label};
  padding: 1%;
  margin: 1.23%;
  border-radius: 5px;
  border: 1px inset ${pinkBlack};
  ${above.medium`
    font-size: 1.2rem;
    padding: .8%;
  `}
  ${below.xLarge`
      max-width: 650px;
  `}
  ${below.large`
      max-width: 500px;
  `}
  ${below.medium`
    font: ${smLabel};
    padding: 0.8%;
    max-width: 90%;
  `}
`;

const Label = styled.label`
  color: ${pinkBlack};
  font: ${label};
  ${below.medium`
      font: ${smLabel};
    `}
`;

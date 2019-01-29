import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap';


const Subscribe = (props) => (
  <Form
    action="/success"
    name="subscribe"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <Input type="hidden" name="bot-field" />
    <FormGroup>
      <Input
        type="email"
        name="email"
        placeholder="Your E-mail"
      />
    </FormGroup>
    <FormGroup>
      <Button
        type="submit"
        className="float-right"
        size="lg"
        block
      >
        Join
      </Button>
    </FormGroup>
  </Form>
);

export default Subscribe;

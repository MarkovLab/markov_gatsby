import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap';


const Subscribe = (props) => (
  <Form>
    <Input type="hidden" name="bot-field" />
    <FormGroup>
      <Input
        type="email"
        name="email"
        placeholder="Your E-mail"
      />
    </FormGroup>
    <Button
      type="submit"
      className="float-right"
      size="lg"
      block
    >
      Join
    </Button>
  </Form>
);

export default Subscribe;

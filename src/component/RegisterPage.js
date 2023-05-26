import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import classes from "./style/Form.module.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const checkBoxHandler = () => {
    setCheckValue(true);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,
      checkBox: checkValue,
    };

    console.log(userData);

    setName("");
    setEmail("");
    setPassword("");
    setCheckValue(null);
  };

  return (
    <Form onSubmit={submitForm} className={`${classes.Form}`}>
      <h1 className={`${classes.title}`}>Sign Up</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="name"
          placeholder="Enter name"
          onChange={nameHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={emailHandler}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Privacy and Security"
          onChange={checkBoxHandler}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterPage;

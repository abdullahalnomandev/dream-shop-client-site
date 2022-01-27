import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IUser {
  email: string;
  password: string;
}
interface ITarget {
  target: {
    name: string;
    value: string;
  };
}

const Login = () => {
  const [loginData, setLoginData] = useState<IUser>({} as IUser);

  const handleChange = (e: ITarget) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="w-50 mt-5 m-auto">
        <Form onSubmit={handleLoginSubmit} className="pb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Link to="/account/register">New User ? Please Register</Link>
      </div>
    </div>
  );
};

export default Login;

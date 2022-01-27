import useFirebase from "hooks/useFirebase";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IUser {
  name: string;
  email: string;
  password: string;
  password2: string;
}
interface ITarget {
  target: {
    name: string;
    value: string;
  };
}

const Register = () => {
  const { registerUser, isLoading } = useFirebase();
  const [loginData, setLoginData] = useState<IUser>({} as IUser);
  const handleChange = (e: ITarget) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e: any) => {
    if (loginData.password !== loginData.password2) {
      alert('Password didn"t match');
      return;
    }

    console.log(loginData);
    // registerUser(loginData.email, loginData.password);
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className="container">
      <div className="w-50 mt-5 m-auto">
        {!isLoading && (
          <Form onSubmit={handleLoginSubmit} className="pb-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </Form.Group>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="password2"
                placeholder="confirm password"
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
        )}
        {isLoading && <Spinner animation="border" variant="primary" />}
        <Link to="/account/login">Already Registered ? Please Login</Link>
      </div>
    </div>
  );
};

export default Register;

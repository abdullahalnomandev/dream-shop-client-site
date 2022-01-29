import { Button, Form, Input } from "antd";
import useAuth from "hooks/useAuth";
import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const { registerUser, isLoading, error, user } = useAuth();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    registerUser(values.email, values.password);
  };

  return (
    <section className="container registerForm">
      <div className=" mt-5 ">
        <Form
          form={form}
          onFinish={onFinish}
          style={{
            border: "1px solid #dbdbdb ",
            padding: "30px",
            boxShadow: "5px 10px 26px 21px #ddd",
            borderRadius: "7px",
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="e-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#eb484b",
                color: "white",
                width: "100%",
              }}
            >
              Register
            </Button>
          </Form.Item>
          {error && (
            <div className="alert alert-danger" role="alert">
              {`(${error}`}
            </div>
          )}
          {user.email && (
            <div className="alert alert-success" role="alert">
              Check your email and click on the link to verify.
            </div>
          )}
        </Form>
        {isLoading && <Spinner animation="border" variant="primary" />}
        <div className="mt-4 pb-4 text-center">
          <Link to="/account/login">Already Registered ? Please Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;

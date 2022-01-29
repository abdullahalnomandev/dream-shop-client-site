import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.min.css";
import google from "assets/images/google.png";
import useAuth from "hooks/useAuth";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import ForgetPasswordDialog from "./ForgetPasswordDialog";

const Login = () => {
  const { loginUser, error, isLoading, googleSignIn, user } = useAuth();

  const onFinish = (values: any) => {
    console.log("Success:", values.email, values.password);
    loginUser(values.email, values.password);
  };

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  useEffect(() => {
    forceUpdate({});
  }, []);
  return (
    <div className="container">
      <div className="w-50 mt-5 m-auto ">
        <div className="form-section">
          <Form
            form={form}
            name="horizontal_login"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email" }]}
            >
              <Input prefix={<AiOutlineMail />} placeholder="E-mail" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<AiFillLock />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{ height: "13px" }}
              >
                <Checkbox>Remember me</Checkbox>
                <ForgetPasswordDialog />
              </Form.Item>
            </Form.Item>
            <Form.Item shouldUpdate>
              <Button
                style={{ backgroundColor: "#eb484b", color: "white" }}
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <Button
            onClick={googleSignIn}
            style={{ width: "100%", border: "1px solid #ddd" }}
          >
            <img
              style={{
                width: "10%",
                marginRight: "20px",
              }}
              className="img-fluid"
              src={google}
              alt=""
            />{" "}
            Login with google{" "}
          </Button>
          <br /> <br />
          {isLoading && <Spinner animation="border" variant="primary" />}
          {error && (
            <div className="alert alert-danger" role="alert">
              {`(${error}`}
            </div>
          )}
          {user.email && (
            <div className="alert alert-success" role="alert">
              User Created Successful.
            </div>
          )}
        </div>
        <div
          className="pb-4"
          style={{ marginTop: "25px", textAlign: "center", width: "350px" }}
        >
          <Link to="/account/register">New User ? Please Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

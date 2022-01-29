import { Button, Form, Input, Modal } from "antd";
import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPasswordDialog = () => {
  const { resetPassword } = useAuth();
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    resetPassword(values.email);
    setVisible(false);
  };

  return (
    <>
      <Link to="" className="login-form-forgot" onClick={showModal}>
        Forgot password
      </Link>

      <Modal
        title="Forgot Password"
        visible={visible}
        onCancel={() => setVisible(!visible)}
      >
        <p style={{ fontWeight: 700, textAlign: "center", padding: "10px" }}>
          Enter your email address and we will send you a link to reset your
          password
        </p>
        <Form form={form} onFinish={onFinish}>
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
              Continue
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ForgetPasswordDialog;

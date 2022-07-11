import { Button,Form, Input } from "antd";
import React,{useState} from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = (e)=>{
    e.preventDefault();
    console.log(username,password);
  }

  return (
    <div className="loginpage_wrapper">
      <div className="logincard">
        <div className="logincard_title">
          <h1>Login</h1>
        </div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          >
          <Input  value={username} onChange = {
            (e)=>{
              setUsername(e.target.value);
            }
          }/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          >
          <Input.Password value={password}
          onChange = {
            (e)=>{
              setPassword(e.target.value);
            }
          }
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          >
          <Button type="primary" htmlType="submit"
          onClick={
            handleLogin
          }
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
          </div>
  );
};

export default LoginPage;

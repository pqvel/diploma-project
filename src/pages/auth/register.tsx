import { FC } from "react";
import Link from "next/link";
import { Button, Divider, Form, Typography, Input, Breadcrumb } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import AuthLayout from "@/components/layouts/AuthLayout";
import { authService, UserDataRegister } from "@/services/AuthService";
import {
  nameRules,
  emailRules,
  passwordRules,
} from "../../../utils/validationRules";

const formStyles = {
  maxWidth: 500,
  width: "100%",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: 8,
};

const Register: FC = () => {
  const [form] = Form.useForm<UserDataRegister>();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        authService.createUser(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <AuthLayout>
      <Breadcrumb style={{ width: "100%" }}>
        <Breadcrumb.Item>
          <Link href="/">Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Регистрация</Breadcrumb.Item>
      </Breadcrumb>
      <Form style={formStyles} form={form} onFinish={handleSubmit}>
        <Typography.Title level={1}>Регистрация</Typography.Title>
        <Form.Item name="name" rules={nameRules}>
          <Input
            name="name"
            size="large"
            type="text"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item name="email" rules={emailRules}>
          <Input
            name="email"
            size="large"
            type="email"
            prefix={<MailOutlined />}
          />
        </Form.Item>
        <Form.Item name="password" rules={passwordRules}>
          <Input.Password
            name="password"
            size="large"
            type="password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "100%" }}
            type="primary"
            size="large"
            htmlType="submit"
            onSubmit={handleSubmit}
          >
            Зарегистрироваться
          </Button>
          <Divider>Уже есть аккаунт</Divider>
          <Link href="/auth/login">
            <Button style={{ width: "100%" }} type="default" size="large">
              Войти
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Register;

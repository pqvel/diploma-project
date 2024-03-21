import { FC } from "react";
import Link from "next/link";
import { Button, Form, Input, Divider, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import AuthLayout from "@/components/layouts/AuthLayout";
import { authService, UserDataLogin } from "@/services/AuthService";
import { emailRules, passwordRules } from "../../../utils/validationRules";

const formStyles = {
  width: "100%",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: 8,
};

const Login: FC = () => {
  const [form] = Form.useForm<UserDataLogin>();

  const handleLogin = () => {
    form.validateFields().then(authService.login).catch(console.error);
  };

  return (
    <AuthLayout>
      {/* <Breadcrumb style={{ width: "100%" }}>
        <Breadcrumb.Item>
          <Link href="/">Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Войти</Breadcrumb.Item>
      </Breadcrumb> */}

      <Form style={formStyles} form={form} onFinish={handleLogin}>
        <Typography.Title level={1}>Войти</Typography.Title>
        <Form.Item name="email" rules={emailRules}>
          <Input
            size="large"
            prefix={<MailOutlined />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item name="password" rules={passwordRules}>
          <Input.Password
            size="large"
            prefix={<LockOutlined />}
            placeholder="Password"
            type="email"
          />
        </Form.Item>
        <Form.Item>
          <Link href="/auth/restore">Забыли пароль</Link>
        </Form.Item>
        <Form.Item>
          <Button
            style={{ maxWidth: 500, width: "100%" }}
            size="large"
            type="primary"
          >
            Войти
          </Button>
          <Divider>Нет аккаунта</Divider>
          <Link href="/auth/register">
            <Button
              style={{ maxWidth: 500, width: "100%" }}
              size="large"
              type="default"
            >
              Регистрация
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Login;

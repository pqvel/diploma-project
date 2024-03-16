import { FC } from "react";
import Link from "next/link";
import { Button, Form, Input, Divider, Typography, Breadcrumb } from "antd";
import { MailOutlined } from "@ant-design/icons";
import AuthLayout from "@/components/layouts/AuthLayout";

const formStyles = {
  maxWidth: 500,
  width: "100%",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: 8,
};

const Restore: FC = () => {
  return (
    <AuthLayout>
      <Breadcrumb style={{ width: "100%" }}>
        <Breadcrumb.Item>
          <Link href="/">Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Сбросить пароль</Breadcrumb.Item>
      </Breadcrumb>
      <Form style={formStyles}>
        <Typography.Title level={1}>Сбросить пароль</Typography.Title>
        <Form.Item>
          <Input
            size="large"
            prefix={<MailOutlined />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>

        <Form.Item>
          <Button style={{ width: "100%" }} size="large" type="primary">
            Продолжить
          </Button>
          <Divider>Уже есть аккаунт</Divider>
          <Link href="/auth/login">
            <Button style={{ width: "100%" }} size="large" type="default">
              Войти
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Restore;

import { FC } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button, Form, Input, Divider, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const Restore: FC = () => {
  return (
    <AuthLayout>
      <Form>
        <Typography.Title level={1}>Восстановить пароль</Typography.Title>
        <Form.Item>
          <Input
            size="large"
            prefix={<UserOutlined />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Продолжить
          </Button>
          <Divider>Уже есть аккаунт</Divider>
          <Link href="/auth/login">
            <Button size="large" type="default" htmlType="submit">
              Войти
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Restore;

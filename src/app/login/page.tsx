"use client";
import { FC, useRef } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Checkbox, Card, Flex } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Container } from "@/components/ui/Wrappers";
import { signIn } from "next-auth/react";

const Login: FC = () => {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async () => {
    const formData = new FormData(form.current as HTMLFormElement);

    const options = {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    };

    console.log(options);

    const response = await signIn("credentials", options);

    if (!response?.error) {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <Flex className="min-h-full" justify="center" align="center">
      <Card className="max-w-lg w-full shadow">
        <form action={handleSubmit} ref={form} name="login">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button className=" mr-5" type="primary" htmlType="submit">
              Log in
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </form>
      </Card>
    </Flex>
  );
};

export default Login;

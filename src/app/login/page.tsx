// "use client";
// import { FC, useRef } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const LoginForm: FC = () => {
//   const router = useRouter();
//   const form = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: any) => {
//     const formData = new FormData(form.current as HTMLFormElement);

//     const options = {
//       email: formData.get("email"),
//       password: formData.get("password"),
//       redirect: false,
//     };

//     console.log(options);

//     const response = await signIn("credentials", options);

//     if (!response?.error) {
//       router.push("/admin");
//       router.refresh();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center flex-1">
//       <form
//         action={handleSubmit}
//         name="login"
//         ref={form}
//         className="flex flex-col items-start bg-white border border-gray-200 shadow p-5 lg:p-8 rounded"
//       >
//         <h3 className=" text-2xl font-semibold mb-4">Вход</h3>
//         <Label text="Ваш email:" required>
//           <Input.TextInput name="email" placeholder="email" maxLength={30} />
//         </Label>
//         <Label text="Ваш пароль:" required>
//           <Input.PasswordInput
//             name="password"
//             placeholder="email"
//             maxLength={30}
//           />
//         </Label>
//         <Button>Войти</Button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// pages/index.js
// "use client"; // pages/login.js
"use client";
import { Form, Input, Button, Checkbox, Card, Flex } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Container } from "@/components/ui/Wrappers";

const Login = () => {
  return (
    <Flex className="min-h-full" justify="center" align="center">
      <Card className="max-w-lg w-full shadow">
        <Form name="login" initialValues={{ remember: true }}>
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <Button className=" mr-5" type="primary" htmlType="submit">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default Login;

import { FC } from "react";
import Link from "next/link";
import { Button, Form, Input, Divider, Typography, Breadcrumb } from "antd";
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
      <Breadcrumb style={{ width: "100%" }}>
        <Breadcrumb.Item>
          <Link href="/">Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Войти</Breadcrumb.Item>
      </Breadcrumb>

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

// function Loginn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [emailInPutError, setEmailInputError] = useState(false);
//   const [passwordInPutError, setPasswordInputError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     validate();
//   }, [email, password]);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     let res = await signIn("credentials", {
//       email,
//       password,
//       callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
//       redirect: false,
//     });

//     if (res?.ok) {
//       // toast success
//       console.log("success");
//       return;
//     } else {
//       // Toast failed
//       setError("Failed! Check you input and try again.");
//       // return;
//       console.log("Failed", res);
//     }
//     return res;
//   }

//   function validate() {
//     // let emailIsValid = validateEmail(email);
//     let emailIsValid = true;

//     if (!emailIsValid) {
//       setEmailInputError(true);
//       return;
//     }
//     if (password.length < 6) {
//       setPasswordInputError(true);
//     } else {
//       setEmailInputError(false);
//       setPasswordInputError(false);
//     }
//   }
//   return (
//     <div className="flex justify-center items-center m-auto p-3">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//       >
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             className={`border-${
//               emailInPutError ? "red-500" : ""
//             } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//             id="email"
//             type="text"
//             placeholder="Email"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             className={` border-${
//               passwordInPutError ? "red-500" : ""
//             } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
//             id="password"
//             type="password"
//             placeholder="******************"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <p className="text-red-500 text-xs italic">
//             Please choose a password.
//           </p>
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2  px-4 rounded  focus:outline-none  focus:shadow-outline"
//             type="submit"
//             disabled={isLoading ? true : false}
//           >
//             {isLoading ? "Loading..." : "Sign In"}
//           </button>
//           <a
//             className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//             href="#"
//           >
//             Forgot Password?
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }

export default Login;

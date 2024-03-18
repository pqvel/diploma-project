import { AbstractService } from "./AbstractService";
import { signIn } from "next-auth/react";

export type UserDataRegister = {
  name: string;
  email: string;
  password: string;
};

export type UserDataLogin = {
  email: string;
  password: string;
};

class AuthService extends AbstractService {
  createUser = (userData: UserDataRegister) => {
    return this.post("/api/user/create", userData);
  };

  login = async (userData: UserDataLogin) => {
    const res = await signIn("credentials", {
      ...userData,
      callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
      redirect: false,
    });

    if (res?.ok) {
      // toast success
      console.log("success");
      return;
    } else {
      throw new Error("Failed! Check you input and try again.");
    }
    return res;
  };
}

export const authService = new AuthService();

import { AbstractService } from "./AbstractService";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

class AuthService extends AbstractService {
  createUser = (userData: UserData) => {
    return this.post("/api/user/create", userData);
  };
}

export const authService = new AuthService();

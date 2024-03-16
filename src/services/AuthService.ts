type UserData = {
  name: string;
  email: string;
  password: string;
};

class AuthService {
  createUser = (userData: UserData) => {};
}

export const authService = new AuthService();

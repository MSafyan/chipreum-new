export interface userReducerState {
  user: {
    loading: boolean;
    user: User | null;
    jwt: string | null;
  };
  redirectTo: null;
}

interface User {
  id: number;
  username: string;
  email: string;
  allowNull?: boolean;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserJwtData {
  jwt: string;
  user: User;
}

export type LoginProps = {
  email: string;
  password: string;
};

export type ForgotPasswordProps = {
  email: string;
};

export type SignupProps = {
  username: string;
  email: string;
  password: string;
};
export type ResetPasswordProps = {
  password: string;
  passwordConfirmation: string;
  code: string;
};

declare module "loginApp/AuthService" {
  const authService: {
    authenticate: (username: string, password: string) => boolean;
    logout: () => void;
    getUser: () => any;
    isAuthenticated: () => boolean;
  };
  export default authService;
}

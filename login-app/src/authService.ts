import users from './users.json';

class AuthService {
  private userKey = 'authenticated_user';

  authenticate(username: string, password: string):boolean {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      // Exclude password from stored object for safety
      const { password: _, ...userInfo } = user;
      localStorage.setItem(this.userKey, JSON.stringify(userInfo));
      
      // Dispatch custom event so the host app can detect the login
      window.dispatchEvent(new Event('auth-change'));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.userKey);
    window.dispatchEvent(new Event('auth-change'));
  }

  getUser() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated():boolean {
    return this.getUser() !== null;
  }
}

const authService = new AuthService();
export default authService;



const Login = () => {
  return (
    <div style={{ padding: '20px', border: '2px solid blue', borderRadius: '8px' }}>
      <h2>Login Application (Micro Frontend)</h2>
      <p>This is the exposed Login component from the login-app.</p>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="button">Login</button>
      </form>
    </div>
  );
};

export default Login;

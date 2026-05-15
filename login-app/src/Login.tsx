import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    alert('Login successful! Check console for details.');
  };

  return (
    <div className="login-container">
      {/* Left Side: Branding */}
      <div className="login-left">
        <h2>Unlock Your Potential with EduNexus</h2>
        <p>Join thousands of learners worldwide. Access premium courses, expert instructors, and a supportive community designed to help you achieve your goals.</p>
      </div>

      {/* Right Side: Login Form */}
      <div className="login-right">
        <div className="login-form-wrapper">
          <h3>Welcome Back</h3>
          <p className="subtitle">Please enter your details to sign in.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                id="email"
                type="email" 
                placeholder="you@example.com" 
                className={errors.email ? 'error' : ''}
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })} 
              />
              {errors.email && <span className="error-message">{errors.email.message as string}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                placeholder="Enter your password" 
                className={errors.password ? 'error' : ''}
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })} 
              />
              {errors.password && <span className="error-message">{errors.password.message as string}</span>}
            </div>

            <button type="submit" className="btn-submit">Sign In</button>
          </form>

          <div className="form-footer">
            <p>Don't have an account? <a href="#signup">Sign up for free</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

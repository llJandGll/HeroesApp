import './styles/LoginPage.css'

import { LoginForm } from "../components/LoginForm"

export const LoginPage = () => {


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Enter your credentials to continue</p>
        </div>

        <LoginForm />

        <div className="social-login">
          <p>Or sign in with</p>
          <div className="social-icons">
            <button className="social-button google">
              <i className="fab fa-google"></i>
            </button>
            <button className="social-button facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-button twitter">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
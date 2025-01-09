import React from 'react'
import { useContext } from "react"
import { AuthContext } from "../context"
import { useNavigate } from "react-router"
import { useForm } from '../hooks/useForm'

export const LoginForm : React.FC= () => {

  console.log('this components fires once')

  const navigate = useNavigate()
  const { onLogin,  } = useContext( AuthContext )
  
  const { initialState, validateForm, onInputChange, errorMessage } = useForm({
    email : '',
    password : ''
  })

  const { email, password} = initialState;

  const onLoginSubmit = ( event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    if ( !validateForm()){
      console.log('Form is not valid', errorMessage);
      return;
    }
    
    const lastpath = localStorage.getItem('lastPath') || '/';
    onLogin( email, password)
    console.log(lastpath)
    
    navigate( lastpath, { 
      replace: true,
    })
  }

  return (
    <>
      <form className="login-form" onSubmit={onLoginSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email"
              value={email} 
              name='email'
              onChange={onInputChange}
            />
            <i className="input-icon fas fa-envelope"></i>
            {
              errorMessage.email && 
              <div className="search__error">
                <span className="search__error-icon">!</span>
                <span className="search__error-text">{errorMessage.email}</span>
              </div>
            }
          </div>

         

          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password"
              value={ password } 
              name='password'
              onChange={onInputChange}
            />
            <i className="input-icon fas fa-lock"></i>
            {
              errorMessage.password && 
              <div className="search__error">
                <span className="search__error-icon">!</span>
                <span className="search__error-text">{errorMessage.password}</span>
              </div>
            }
          </div>
        

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="login-button"
          >
            <span>Login</span>
          </button>
        </form>
    </>
  )
}

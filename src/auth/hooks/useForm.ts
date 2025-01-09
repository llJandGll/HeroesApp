import { ChangeEvent, useState } from "react"
import { User } from "../interfaces";
import { ErrorMessageFormProps } from "../interfaces/ErrorMessageFormProps";

export const useForm = ( initialForm : User) => {

  const [initialState, setInitialState] = useState<User>( initialForm );
  const [errorMessage, setErrorMessage] = useState<ErrorMessageFormProps>({});


  const onInputChange = ( event : ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    setInitialState({
      ...initialState,
      [name] : value
    })

    setErrorMessage(() => {
      return {
        ...errorMessage,
      [name] : undefined
      }
    })
  }


  const validateForm = () => {
    const errors : ErrorMessageFormProps = {};
    let isValidate : boolean= true;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if ( initialState.email.length <= 0 ){
      errors.email = 'Email is required';
      isValidate = false;
    }else if( emailRegex.test( initialState.email ) === false ){
      errors.email = 'Invalid email';
      isValidate = false;
    }

    if( initialState.password.length <= 0 ){
      errors.password = 'Password is required';
      isValidate = false;
    }

    setErrorMessage( errors );

    
    return isValidate;
  }

  return {	
    initialState,
    ...initialState,
    errorMessage,
    validateForm,
    onInputChange,
  }
}

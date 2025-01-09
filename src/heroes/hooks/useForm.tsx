import { ChangeEvent, useState } from "react"
import { FormState } from "../interfaces"
import { ErrorFormProps } from "../interfaces/ErrorFormProps"

export const useForm = (initialForm: FormState) => {  
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [errorMessage, setErrorMessage] = useState<ErrorFormProps>({});

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((currentState) => ({
      ...currentState,
      [name]: value
    }));

    setErrorMessage( ( currentErrorMessage ) => {
      return { ...currentErrorMessage, [name]: undefined };
    })
  }

  const validateForm = () => {
    const errors: ErrorFormProps = {};
    let isValid = true;

    if (!formState.superhero.trim()) {
      errors.superhero = 'Superhero is required';
      isValid = false;
    }

    setErrorMessage(errors);
    return isValid;
  }

  const onResetForm = () => {
    setFormState(initialForm);
    setErrorMessage({});
  }

  return {
    formState,
    onInputChange,
    onResetForm,
    validateForm,
    errorMessage,
    setFormState,
  }
}
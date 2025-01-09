import { Search } from 'lucide-react'
import { useForm } from '../hooks/useForm';
import { memo } from 'react';
import { FormSearchHeroProps } from '../interfaces/FormSearchHeroProps';
import { useNavigate } from 'react-router';


export const FormSearchHero = memo<FormSearchHeroProps>(({ query }) => {
 

  
  const navigate = useNavigate();

  
  const {  
    formState, 
    onInputChange, 
    errorMessage 
  } = useForm({
    superhero: query as string,
  });
  
  const { superhero } = formState;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    

    navigate(`?q=${ superhero }`);
  }


  return (
    <>
      <div className="search__header">
        <h1 className="search__title">Search Heroes</h1>
        <p className="search__subtitle">Find your favorite superhero</p>
      </div>

      <form className="search__form-container" onSubmit={ onSubmit }>
        <div className="search__input-group">
          <div className="search__input-wrapper">
            <Search className="search__icon" />
            
            <input 
              type="text"
              placeholder="Search a hero..."
              className={`search__input ${errorMessage.superhero ? 'search__input--error' : ''}`}
              name="superhero"
              value={formState.superhero}
              onChange={onInputChange}
            />
          </div>
          
          <button
            type="submit"
            className="search__button"
          >
            Search
          </button>
        </div>
        
        {errorMessage.superhero && (
          <div className="search__error">
            <span className="search__error-icon">!</span>
            <span className="search__error-text">{errorMessage.superhero}</span>
          </div>
        )}
      </form>
    </>
  );
});

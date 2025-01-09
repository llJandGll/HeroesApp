
import './SearchPage.css'
import { FormSearchHero } from '../components/FormSearchHero';
import { Dc, Marvel } from '../interfaces';
import { SearchHero } from '../components/SearchHero';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export const SearchPage = () => {

  
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  
  const heroes : Marvel[] | Dc[] =  getHeroesByName( q as string );

  console.log(heroes)

  return (
    <div className="search">
      <div className="search__container">
        
        <FormSearchHero query={ q as string } />

        <div className="search__results">
          <h2 className="search__results-title">Search Results</h2>
          
          <div className="search__results-grid">

            <SearchHero heroes={ heroes } />

          </div>

          {

              heroes.length <= 0 && q!.length > 0 ? (
                <div className="search__no-results">
                  <h2 className="search__no-results-title"> {`Hero not found for "${q}"`} </h2>
                  <p className="search__no-results-text">Try searching a hero</p>
                </div>
              )   
           
              :

               heroes.length <= 0 && (
                <div className="search__no-results">
                  <h2 className="search__no-results-title"> Search for a hero </h2>
                  <p className="search__no-results-text">Try searching a hero</p>
                </div>
              )   
      
            
          }
        </div>
      </div>
    </div>
  )
}

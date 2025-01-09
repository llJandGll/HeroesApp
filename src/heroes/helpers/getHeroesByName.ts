import { heroes } from '../../data/dataHero';
import { Dc } from '../interfaces';
import { Marvel } from '../interfaces/Marvel';

export const getHeroesByName = ( superhero : string ) => {
  superhero = superhero.toLowerCase().trim();

  if ( !superhero ) {
    console.log( 'superhero no encontrado con', superhero );
    return [];
  }

  const heroesSearched = heroes.filter( ( hero : Dc | Marvel ) => hero.superhero.toLowerCase().includes( superhero ) );
  return heroesSearched;
}
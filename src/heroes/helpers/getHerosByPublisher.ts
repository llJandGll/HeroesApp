import { heroes } from '../../data/dataHero';

export const getHerosByPublisher = ( publisher : string ) => {
  const publishers = ['Marvel Comics', 'DC Comics'];

  if ( !publishers.includes( publisher) ) {
    console.log( 'publisher not found', publisher );
    return [];
  };

  const heroesByPublisher = heroes.filter( ( hero ) => hero.publisher === publisher );

  return heroesByPublisher

}
import React from 'react';
import { HeroListProps } from '../interfaces/HeroListProps';
import { Dc, Marvel } from '../interfaces';
import { HeroCard } from './HeroCard';

export const SearchHero : React.FC<HeroListProps> = ({ heroes }) => {

  return (
    <>
      {
        heroes.map(( hero : Marvel | Dc ) => (
          <HeroCard key={ hero.id } {...hero} />
        ))
      }
    </>
  )
}

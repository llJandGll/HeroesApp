import { heroes } from "../../data/dataHero";
import { Dc, Marvel } from "../interfaces";

export const getHeroById = ( id : string ) => {
  console.log('se volvio a llamar a getHeroById');
  const hero = heroes.find( ( hero ) => hero.id === id );

  return hero as Marvel | Dc;
}
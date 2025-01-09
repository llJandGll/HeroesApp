import { heroes } from "../../data/dataHero";
import { Dc, Marvel } from "../interfaces";

export const getHeroById = ( id : string ) => {
  const hero = heroes.find( ( hero ) => hero.id === id );

  return hero as Marvel | Dc;
}
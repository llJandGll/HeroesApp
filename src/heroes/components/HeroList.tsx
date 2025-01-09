import { useMemo } from "react";
import { getHerosByPublisher } from "../helpers/getHerosByPublisher";
import { Dc, Marvel } from "../interfaces";
import { CharactersProps } from "../interfaces/charactersProps";
import { HeroCard } from "./HeroCard"

import 'animate.css';

export const HeroList: React.FC<CharactersProps> = ({ publisher }) => {

  const heroes : Marvel[] | Dc[] = useMemo( () => getHerosByPublisher( publisher as string), [publisher]);

  return (
    <section className="companies">
      <h2 className="companies__title">
      </h2>
      <div className="companies__container">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </section>
  )
}

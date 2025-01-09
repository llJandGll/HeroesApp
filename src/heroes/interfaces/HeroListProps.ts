import { Dc } from "./Dc";
import { Marvel } from "./Marvel";

export interface HeroListProps {
  heroes : Marvel[] | Dc[];
}
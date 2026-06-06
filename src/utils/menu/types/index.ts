import { allCocktails } from "../../../constants";

export interface IgetCocktailAtUtil {
  indexOffset: number;
  cockTails: typeof allCocktails;
  totalCocktails: number;
  currentIndex: number;
}

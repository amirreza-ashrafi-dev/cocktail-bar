import { IgetCocktailAtUtil } from "./types";

export const getCocktailAtUtil = ({
  indexOffset,
  cockTails,
  totalCocktails,
  currentIndex,
}: IgetCocktailAtUtil) =>
  cockTails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];

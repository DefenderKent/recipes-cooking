import {TRecipesState} from "./namespace";
import {IRecipe} from "../../api/types";

export const communicationsSelector = (state: TRecipesState<IRecipe>) => state.communications
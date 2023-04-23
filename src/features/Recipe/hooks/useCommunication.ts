import {ERecipesCommunications} from "../namespace";
import { useRecipesStore} from "./useRecipe";
import {communicationsSelector} from "../selectors";

export const useCommunication = (communicationName: keyof typeof ERecipesCommunications): boolean => {
    return useRecipesStore(communicationsSelector)[communicationName]
}
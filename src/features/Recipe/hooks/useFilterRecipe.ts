import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

import Api from "../../../api";
import {immer} from "zustand/middleware/immer";
import {IGetFilters} from "../../../api/types";

const  initState = {
    options:null,
    isLoading:false
}

type TState ={
    options:IGetFilters | null;
    fetchFilters: () => Promise<void>;
    isLoading: boolean
}

export const useFilterRecipeStore = create<TState>()(devtools(immer((set) => ({
    ...initState,
    fetchFilters: async () => {
        set(state => {
            state.isLoading = true
        })
        const options = await Api.instance.recipes.getFilters()
        set({options})
        set(state => {
            state.isLoading  = false
        })
    }
}))));

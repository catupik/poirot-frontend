import {createSlice} from '@reduxjs/toolkit'


export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        selectedItemsCategory: 'All categories'
    },
    reducers: {
        filterItemsCategory: (state, action) => {
            state.selectedItemsCategory = action.payload
        }
    }
})

export const {filterItemsCategory} = itemsSlice.actions
export const getItemsSelectedCategory = state => state.items.selectedItemsCategory;
export default itemsSlice.reducer;
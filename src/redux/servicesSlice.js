import {createSlice} from '@reduxjs/toolkit';
export const serviceSlice = createSlice({
    name: 'services',
    initialState: {
        selectedCategory: 'All services',
        selectedService: ''
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSelectedService: (state, action) => {
            state.selectedService = action.payload
        }
    }
})

export const {filterCategory, setSelectedService} = serviceSlice.actions;
export const getSelectedCategory = state => state.services.selectedCategory;
export default serviceSlice.reducer;
import {configureStore} from '@reduxjs/toolkit';
import services from './servicesSlice'
import items from './itemsSlice'
import cart from './cartSlice'

export const store = configureStore({
    reducer:{
        services: services,
        items: items,
        cart: cart
    }
})
/*
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from '@reduxjs/toolkit/src/tests/injectableCombineReducers.example';
const { configureStore } = require("@reduxjs/toolkit");

const initialState = {
    contacts: [
      {name: 'John', phone: '1234567890'},
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                contacts: [...state.contacts, action.payload]
            }
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter(contact => contact.phone !== action.payload)
            }
        default:
            return state;
    }
}

const enhancer = devToolsEnhancer();

const store = configureStore({
    reducer: rootReducer,
});

*/

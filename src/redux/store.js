import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from "./filterSlice";
import { contactsReducer } from './contactsSlice';

  
const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

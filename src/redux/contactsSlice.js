import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, getAllContacts, deleteContactById } from "./contactOperations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      contacts: [],
      isLoading: false,
      error: null,
    },
        
    extraReducers: builder => {
      builder
        .addCase(getAllContacts.pending, handlePending)
        .addCase(getAllContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.contacts = action.payload;
        })
        .addCase(getAllContacts.rejected, handleRejected) 
        .addCase(addNewContact.pending, handlePending)
        .addCase(addNewContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.contacts = [...state.contacts, action.payload];
        })
        .addCase(addNewContact.rejected, handleRejected)
        .addCase(deleteContactById.pending, handlePending)
        .addCase(deleteContactById.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload.id
          );
        })
        .addCase(deleteContactById.rejected, handleRejected);
    },
  });
  
  export const contactsReducer = contactsSlice.reducer;
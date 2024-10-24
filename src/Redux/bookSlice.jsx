import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: 'bookmanager',
  initialState: {
    books: [],
    searchTerm: '', 
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const update = state.books.find(book => book.id === id);
      if (update) {
        update.title = title;
        update.author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    setSearchTerm: (state, action) => { 
      state.searchTerm = action.payload;
    },
  },
});

export const { addBook, updateBook, deleteBook, setSearchTerm } = bookSlice.actions;
export default bookSlice.reducer;

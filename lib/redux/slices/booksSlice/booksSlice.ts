/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: IBooksSliceState = {
  books: [],
  status: "idle",
  showModal: false,
  selectedBook: null,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Omit<IBook, "id">>) => {
      const newBook = {
        id: state.books.length + 1,
        ...action.payload,
      };
      state.books.push(newBook);
      state.showModal = false;
      state.selectedBook = null;
    },
    deleteBook: (state, action: PayloadAction<IBook["id"]>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload };
        }
        return book;
      });
      state.showModal = false;
      state.selectedBook = null;
    },
    showAddBookModal: (state, action: PayloadAction<boolean>) => {
      state.selectedBook = null;
      state.showModal = action.payload;
    },
    showEditBookModal: (state, action: PayloadAction<IBook>) => {
      state.selectedBook = action.payload;
      state.showModal = true;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.books,
      };
    },
  },
});

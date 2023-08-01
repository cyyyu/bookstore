/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: IBooksSliceState = {
  books: [
    {
      id: 1,
      name: "The Hobbit",
      price: 50,
      category: "Fantasy",
      description:
        "The Hobbit is a fantasy novel written by English author J. R. R. Tolkien",
    },
    {
      id: 2,
      name: "The Lord of the Rings",
      price: 50,
      category: "Fantasy",
      description:
        "The Lord of the Rings is a fantasy novel written by English author J. R. R. Tolkien",
    },
    {
      id: 3,
      name: "The Silmarillion",
      price: 50,
      category: "Fantasy",
      description:
        "The Silmarillion is a fantasy novel written by English author J. R. R. Tolkien",
    },
    {
      id: 4,
      name: "World of Warcraft",
      price: 50,
      category: "Fantasy",
      description:
        "World of Warcraft is a fantasy novel written by English author J. R. R. Tolkien",
    },
  ],
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

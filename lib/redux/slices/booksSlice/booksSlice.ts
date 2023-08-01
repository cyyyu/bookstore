/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: IBooksSliceState = {
  value: [
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
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<IBook["id"]>) => {
      state.value.filter((book) => book.id !== action.payload);
    },
    editBook: (
      state,
      action: PayloadAction<{ [k in keyof IBook]: IBook[k] }>
    ) => {
      state.value = state.value.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload };
        }
        return book;
      });
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

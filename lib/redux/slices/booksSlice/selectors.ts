/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectBooksState = (state: ReduxState) => state.books;

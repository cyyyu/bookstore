"use client";

import { selectBooksState } from "@/lib/redux";
import Book from "@/components/Book";
import { useSelector } from "react-redux";

export default function BookContainer() {
  const { value: books } = useSelector(selectBooksState);

  return (
    <div className="w-full grid place-items-center grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

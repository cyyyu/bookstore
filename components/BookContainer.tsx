"use client";

import { selectBooksState } from "@/lib/redux";
import Book from "@/components/Book";
import { useSelector } from "react-redux";
import AddBookButton from "./AddBookButton";
import Modal from "./Modal";
import Form from "./Form";

export default function BookContainer() {
  const { books, showModal } = useSelector(selectBooksState);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex">
        <AddBookButton />
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>

      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </div>
  );
}

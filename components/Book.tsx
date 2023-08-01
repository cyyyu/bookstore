"use client";
import { useDispatch } from "react-redux";
import { booksSlice } from "@/lib/redux";

export default function Book({ book }: { book: IBook }) {
  const dispatch = useDispatch();

  return (
    <div
      className="border w-full flex flex-col gap-4 p-4 hover:shadow-lg bg-orange-50 cursor-default bg-gradient-to-t from-indigo-100"
      onClick={() => dispatch(booksSlice.actions.showEditBookModal(book))}
    >
      <h3 className="font-bold text-xl text-slate-700">
        {"<<" + book.name + ">>"}
      </h3>
      <div>
        <p>
          <span className="font-bold">Price:</span> {book.price}
        </p>
        <p>
          <span className="font-bold">Category:</span> {book.category}
        </p>
        <p className="break-all">
          <span className="font-bold">Description:</span> {book.description}
        </p>
      </div>
      <div className="mt-auto">
        <button
          className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(booksSlice.actions.deleteBook(book.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

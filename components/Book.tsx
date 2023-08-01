"use client";
import { useDispatch } from "react-redux";
import { booksSlice } from "@/lib/redux";

export default function Book({ book }: { book: IBook }) {
  const dispatch = useDispatch();

  return (
    <div
      className="border w-full flex flex-col gap-4 p-4 hover:shadow-lg bg-slate-100"
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
        <p>
          <span className="font-bold">Description:</span> {book.description}
        </p>
      </div>
    </div>
  );
}

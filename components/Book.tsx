"use client";

export default function Book({ book }: { book: IBook }) {
  return <div className="border">{book.name}</div>;
}

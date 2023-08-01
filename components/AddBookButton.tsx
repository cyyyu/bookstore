import { booksSlice } from "@/lib/redux";
import { useDispatch } from "react-redux";

export default function AddBookButton() {
  const dispatch = useDispatch();

  return (
    <button
      type="submit"
      className="ml-auto text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => dispatch(booksSlice.actions.showAddBookModal(true))}
    >
      Add Book
    </button>
  );
}

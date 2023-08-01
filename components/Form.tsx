import { booksSlice, selectBooksState } from "@/lib/redux";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const { selectedBook } = useSelector(selectBooksState);

  const [error, setError] = useState("");
  const [editingBook, setEditingBook] = useState<Omit<IBook, "id">>(
    selectedBook || {
      name: "",
      price: 0,
      category: "",
      description: "",
    }
  );

  return (
    <div className="max-w-lg bg-white container mx-auto mt-12 shadow-lg p-12 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Adding a new book</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg p-2 text-sm w-full"
              value={editingBook.name}
              onChange={(e) =>
                setEditingBook({ ...editingBook, name: e.target.value })
              }
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Price
            </span>
            <input
              type="number"
              placeholder="Price"
              className="border rounded-lg p-2 text-sm w-full"
              value={editingBook.price}
              onChange={(e) =>
                setEditingBook({
                  ...editingBook,
                  price: Number(e.target.value),
                })
              }
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Category
            </span>
            <input
              type="text"
              placeholder="Category"
              className="border rounded-lg p-2 text-sm w-full"
              value={editingBook.category}
              onChange={(e) =>
                setEditingBook({ ...editingBook, category: e.target.value })
              }
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Description
            </span>
            <textarea
              rows={4}
              placeholder="Description"
              className="border rounded-lg p-2 text-sm w-full"
              value={editingBook.description}
              onChange={(e) =>
                setEditingBook({ ...editingBook, description: e.target.value })
              }
            />
          </label>
          <div className="flex">
            <button
              className="ml-auto mr-2 text-sm bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                dispatch(booksSlice.actions.showAddBookModal(false))
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                // Simple validation
                if (
                  !editingBook.name ||
                  !editingBook.category ||
                  !editingBook.description
                ) {
                  setError("Please fill in all fields");
                  return;
                }

                if (selectedBook) {
                  dispatch(
                    booksSlice.actions.updateBook({
                      ...editingBook,
                      id: selectedBook.id,
                    })
                  );
                } else {
                  dispatch(booksSlice.actions.addBook(editingBook));
                }
              }}
            >
              {selectedBook ? "Update" : "Add Book"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

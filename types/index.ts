interface IBook {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface IBooksSliceState {
  books: IBook[];
  status: "idle" | "loading" | "failed";
  showModal: boolean;
  selectedBook: IBook | null;
}

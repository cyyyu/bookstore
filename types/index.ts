interface IBook {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface IBooksSliceState {
  value: IBook[];
  status: "idle" | "loading" | "failed";
}

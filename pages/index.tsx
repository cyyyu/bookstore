import clsx from "clsx";
import { wrapper } from "@/lib/redux";
import BookContainer from "@/components/BookContainer";
import { Bai_Jamjuree } from "next/font/google";
import { HYDRATE } from "next-redux-wrapper";
import initialBooks from "@/lib/redux/slices/booksSlice/initialBooks";

const font = Bai_Jamjuree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function Home() {
  return (
    <main className={clsx("flex p-4 md:p-12 lg:p-20", font.className)}>
      <BookContainer />
    </main>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch({
    type: HYDRATE,
    payload: {
      books: {
        books: initialBooks,
        status: "idle",
        showModal: false,
        selectedBook: null,
      },
    },
  });

  return { props: {} };
});

export default Home;

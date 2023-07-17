import BookCard from '../components/ui/BookCard';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import { useAppDispatch } from '../redux/hooks';
import { IBook } from '../types/globalTypes';

export default function AllBooks() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetBooksQuery(undefined);
  return (
    <div className="mx-2 md:mx-8 lg:mx-16">
      <h2 className="text-2xl font-semibold mb-4 text-center">All Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

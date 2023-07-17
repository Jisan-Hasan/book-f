import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import {
  useGetReviewsQuery,
  useGetSingleBookQuery,
  usePostReviewMutation,
} from '../redux/features/books/bookApi';

export default function BookDetails() {
  const [review, setReview] = useState('');
  const { id } = useParams();
  const [postReview, { isSuccess }] = usePostReviewMutation();
  const { data: reviewData } = useGetReviewsQuery(id);
  console.log(reviewData?.data);

  const handleSubmitReview = () => {
    if (review == '') {
      toast.error('Write something in review');
      return;
    }
    postReview({ id: id, data: { review: review } });

    // Clear the review input field
    setReview('');
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Review added successfully!');
    }
  }, [isSuccess]);

  const { data, isLoading } = useGetSingleBookQuery(id);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  const { title, author, genre, publicationDate } = data.data;

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-5">
      <div className=" bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between align-baseline">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="mt-6 flex gap-2">
            <Link
              to={`/edit-book/${id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
            >
              Edit
            </Link>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none">
              Delete
            </button>
          </div>
        </div>
        <p className="text-gray-600 mb-2">Author: {author}</p>
        <p className="text-gray-600 mb-2">Genre: {genre}</p>
        <p className="text-gray-600 mb-4">
          Publication Date: {publicationDate}
        </p>
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">Reviews</h3>
        <div className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Enter your review"
            value={review}
            required
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            onClick={handleSubmitReview}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
          >
            Submit
          </button>
        </div>
        <ul className="mt-5">
          {reviewData &&
            reviewData?.data?.reviews?.map((r: string, index: number) => (
              <li key={index} className="text-gray-600 mb-2">
                R{index + 1}: {r}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

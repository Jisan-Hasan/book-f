import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetSingleBookQuery,
  usePostReviewMutation,
} from '../redux/features/books/bookApi';
import toast from 'react-hot-toast';

export default function BookDetails() {
  const [review, setReview] = useState('');
  const { id } = useParams();
  const [postReview, { isSuccess }] = usePostReviewMutation();
  const handleSubmitReview = () => {
    postReview({ id: id, data: { review: review } });
    if(isSuccess){
      toast.success('Review added successfully!')
    }
    // Clear the review input field
    setReview('');
  };
  const { data, isLoading } = useGetSingleBookQuery(id);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  const { title, author, genre, publicationDate, review: reviews } = data.data;

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
      <div className=" bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between align-baseline">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="mt-6 flex gap-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none">
              Edit
            </button>
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
        <div className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Enter your review"
            value={review}
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
        <h3 className="text-lg font-semibold mb-2">Reviews</h3>
        <ul>
          {reviews?.map((r: string, index: number) => (
            <li key={index} className="text-gray-600 mb-2">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

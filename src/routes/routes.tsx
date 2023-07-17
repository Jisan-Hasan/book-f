import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddNewBook from '../pages/AddNewBook';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../pages/BookDetails';
import EditBook from '../pages/EditBook';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/add-new',
        element: <AddNewBook />,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
      },
      {
        path: '/edit-book/:id',
        element: <EditBook />,
      },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddNewBook from '../pages/AddNewBook';
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
    ],
  },
]);

export default routes;

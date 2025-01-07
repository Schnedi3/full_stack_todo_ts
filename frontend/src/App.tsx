import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Login, Todo } from './Routes';
import './app.css';

// const ProtectedRoute = () => {
//   if () {
//     return <Login />;
//   }

//   return <Outlet />;
// };

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    index: true,
  },
  {
    // element: <ProtectedRoute />,
    children: [{ path: '/', element: <Todo /> }],
  },
  {
    path: '*',
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export const App = () => {
  return (
    <main className='app'>
      <ToastContainer
        autoClose={1500}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        newestOnTop={true}
      />

      <div className='header'></div>
      <Header />

      <RouterProvider router={router} />
    </main>
  );
};

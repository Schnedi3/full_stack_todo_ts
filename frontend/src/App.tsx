import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Login, Todo } from './Routes';
import { useAuthStore } from './store/authStore';
import './app.css';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<Login />} />

      <Route path='/' element={<ProtectedRoute />}>
        <Route index element={<Todo />} />
      </Route>
    </>
  )
);

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

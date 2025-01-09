import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { Header } from './Routes';
import './app.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

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

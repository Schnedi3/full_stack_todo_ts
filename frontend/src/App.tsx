import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './Routes';
import './app.css';

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
    </main>
  );
};

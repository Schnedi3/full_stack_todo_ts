import { signOut } from 'firebase/auth';

import { useTheme } from '../../hooks/useTheme';
import { iconTheme } from '../../Routes';
import { auth } from '../../firebase/firebase';
import { useAuthStore } from '../../store/authStore';
import styles from './header.module.css';
import './themes.css';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();

  const toggleTheme = () => {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  const handleLogout = () => {
    signOut(auth);
    setIsAuthenticated(false);
  };

  return (
    <section className={styles.header}>
      <button className={styles.theme} onClick={toggleTheme}>
        <img
          className={styles.iconTheme}
          src={iconTheme}
          alt='change theme icon'
        />
        <p className={styles.themeText}>
          {theme === 'theme-light' ? 'Dark theme' : ' Light theme'}
        </p>
      </button>

      {isAuthenticated && (
        <button className={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      )}
    </section>
  );
};

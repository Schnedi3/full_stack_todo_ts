import { signInWithPopup } from 'firebase/auth';

import { iconGoogle } from '../../Routes';
import { auth, googleProvider } from '../../firebase/firebase';
import { useAuthStore } from '../../store/authStore';
import styles from './login.module.css';

export default function Login() {
  const { setIsAuthenticated } = useAuthStore();

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.auth}>
      <h2 className={styles.title}>Welcome back</h2>

      <button className={styles.gbutton} onClick={googleLogin}>
        <img className={styles.iconGoogle} src={iconGoogle} />
        <p className={styles.gbuttonText}>Login with Google</p>
      </button>
    </section>
  );
}

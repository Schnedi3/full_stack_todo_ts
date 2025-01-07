import { iconGoogle } from '../../Routes';
import styles from './login.module.css';

export default function Login() {
  return (
    <section className={styles.auth}>
      <h2 className={styles.title}>Welcome back</h2>

      <button className={styles.gbutton}>
        <img className={styles.iconGoogle} src={iconGoogle} />
        <p className={styles.gbuttonText}>Login with Google</p>
      </button>
    </section>
  );
}

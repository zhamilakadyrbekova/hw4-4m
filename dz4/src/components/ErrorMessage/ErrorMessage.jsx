import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ children }) {
  return (
    <div className={styles.error} role="alert">
      {children}
    </div>
  );
}

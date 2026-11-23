import styles from './SearchInput.module.css';

export default function SearchInput({ value, onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Введите город, например Paris"
      aria-label="Название города"
      autoFocus
    />
  );
}

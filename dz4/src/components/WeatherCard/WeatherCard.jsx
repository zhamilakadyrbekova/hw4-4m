import styles from './WeatherCard.module.css';

export default function WeatherCard({ city, temp, description, icon, wind }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.info}>
        <h2 className={styles.city}>{city}</h2>
        <p className={styles.temp}>{temp}°C</p>
        <p className={styles.description}>{description}</p>
        {wind !== undefined && <p className={styles.wind}>Ветер: {wind} м/с</p>}
      </div>
    </div>
  );
}

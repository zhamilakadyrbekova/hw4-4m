import { useEffect, useMemo, useState } from 'react';
import weatherData from './data/weather.json';
import { debounce } from './utils/Debounce.js';
import SearchInput from './components/SearchInput/SearchInput.jsx';
import WeatherCard from './components/WeatherCard/WeatherCard.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import styles from './App.module.css';

function findCity(query) {
    const normalized = query.trim().toLowerCase();
    const key = Object.keys(weatherData).find((c) => c.toLowerCase() === normalized);
    return key ? { city: key, ...weatherData[key] } : null;
}

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useMemo(() => debounce(setSearchTerm, 500), []);

    useEffect(() => () => debouncedSearch.cancel(), [debouncedSearch]);

    const handleChange = (value) => {
        setInputValue(value);
        debouncedSearch(value);
    };

    const hasQuery = searchTerm.trim() !== '';
    const weather = hasQuery ? findCity(searchTerm) : null;

    return (
        <main className={styles.app}>
            <h1 className={styles.title}>Погода</h1>

            <SearchInput value={inputValue} onChange={handleChange} />

            <section className={styles.result}>
                {!hasQuery && (
                    <p className={styles.hint}>Доступные города: {Object.keys(weatherData).join(', ')}</p>
                )}
                {hasQuery && weather && <WeatherCard {...weather} />}
                {hasQuery && !weather && (
                    <ErrorMessage>Город «{searchTerm.trim()}» не найден</ErrorMessage>
                )}
            </section>
        </main>
    );
}
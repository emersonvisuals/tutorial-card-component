import styles from "./page.module.css";
import Card from "./components/Card/Card";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.backdrop}></div>
            <Card />
        </main>
    );
}

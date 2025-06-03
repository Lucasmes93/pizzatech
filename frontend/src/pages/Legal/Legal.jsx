import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Legal.module.scss'

export default function Legal () {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.container}>
                <h1>Mentions légales</h1>

                <p>Éditeur : PizzaTech – 31 rue Paul Meurice, 75020 Paris.</p>
                <p>Directeur de la publication : Lucas Messia Doliveux</p>
            </main>
            <Footer />
        </div>
    )
}

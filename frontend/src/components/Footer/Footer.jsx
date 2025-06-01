import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <strong>PizzaTech © 2025</strong> — Fait avec 🍕 par Lucas MESSIA DOLIVEUX
            </div>
            <div className={styles.footerLinks}>
                <a href="#">Mentions légales</a>
                <a href="#">Contact</a>
                <a href="#">CGU</a>
            </div>
        </footer>
    )
}
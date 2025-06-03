import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <strong>PizzaTech © 2025</strong> — Fait avec 🍕 par Lucas
            </div>
            <div className={styles.footerLinks}>
                <Link to="/legal">Mentions légales</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cgu">CGU</Link>
            </div>
        </footer>
    )
}

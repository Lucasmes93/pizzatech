import { useEffect, useState } from 'react'
import { getPizzas } from '../../api/client'
import styles from './Home.module.scss'

export default function Home() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        getPizzas().then(setPizzas)
    }, [])

    return (
        <div className={styles.container}>
            <h1>Menu PizzaTech</h1>
            <ul className={styles.list}>
                {pizzas.map((pizza) => (
                    <li key={pizza.id} className={styles.item}>
                        <strong>{pizza.name}</strong> - {pizza.price} €
                        <p>{pizza.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

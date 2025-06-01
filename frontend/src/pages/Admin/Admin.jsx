import { useEffect, useState } from 'react'
import { createPizza, getPizzas } from '../../api/client'
import styles from './Admin.module.scss'

export default function Admin() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [pizzas, setPizzas] = useState([])

    const refresh = () => getPizzas().then(setPizzas)

    useEffect(() => {
        refresh()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createPizza({ name, description, price: parseFloat(price) })
        setName('')
        setDescription('')
        setPrice('')
        refresh()
    }

    return (
        <div className={styles.container}>
            <h1>Administration</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
                <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <button type="submit">Ajouter</button>
            </form>

            <ul className={styles.list}>²
                {pizzas.map((p) => (
                    <li key={p.id} className={styles.item}>
                        <strong>{p.name}</strong> – {p.price} €
                    </li>
                ))}
            </ul>
        </div>
    )
}

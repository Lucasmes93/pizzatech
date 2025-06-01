// backend/src/app.js
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import pizzaRoutes from './routes/pizzaRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/pizzas', pizzaRoutes)
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l’API PizzaTech' })
})

export default app

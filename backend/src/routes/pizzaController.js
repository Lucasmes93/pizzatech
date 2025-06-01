import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const list = async (req, res) => {
    const pizzas = await prisma.pizza.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(pizzas)
}

export const getById = async (req, res) => {
    const id = parseInt(req.params.id)
    const pizza = await prisma.pizza.findUnique({ where: { id } })
    if (!pizza) return res.status(404).json({ error: 'Pizza non trouvée' })
    res.json(pizza)
}

export const create = async (req, res) => {
    const { name, description, price } = req.body
    const newPizza = await prisma.pizza.create({
        data: { name, description, price: parseFloat(price) }
    })
    res.status(201).json(newPizza)
}

export const update = async (req, res) => {
    const id = parseInt(req.params.id)
    const { name, description, price } = req.body
    const pizza = await prisma.pizza.update({
        where: { id },
        data: { name, description, price: parseFloat(price) }
    })
    res.json(pizza)
}

export const remove = async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.pizza.delete({ where: { id } })
    res.status(204).end()
}

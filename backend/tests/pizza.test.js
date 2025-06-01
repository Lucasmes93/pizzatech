import request from 'supertest'
import app from '../src/app.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

beforeAll(async () => {
    await prisma.pizza.deleteMany()
})

afterAll(async () => {
    await prisma.$disconnect()
})

describe('API /pizzas', () => {
    it('GET /api/pizzas doit retourner [] vide au départ', async () => {
        const res = await request(app).get('/api/pizzas')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual([])
    })

    it('POST /api/pizzas doit créer une pizza', async () => {
        const res = await request(app)
            .post('/api/pizzas')
            .send({ name: 'Test Pizza', description: 'Juste un test', price: 9.9 })

        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty('id')
    })
})

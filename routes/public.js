import express from 'express'

const router = express.Router()

router.get('/cadastro', (req, res) => {

    res.json(cadastro)
})

router.post('/cadastro', (req, res) => {
    const user = req.body

    res.status(201).json(user)
})

export default router


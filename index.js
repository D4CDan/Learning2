import express from 'express'
import mongoose from 'mongoose' //conectar o banco de dados

const app = express()
app.use(express.json()) //declarando a utilização do JSON

mongoose.connect(process.env.MONGODB_URI)
.then( () => console.log("Conectado ao banco de dados"))
.catch( (err) => console.log("Erro ao conectar.", err))

const usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    idade: {type: Number, required: true},
}, {timestamps: true})

const usuario = mongoose.model('usuario', usuarioSchema)

//GET
app.get('/usuarios', async (req, res) => {

    const usuariosBanco = await usuario.find()

    res.json(usuariosBanco)
})

app.post('/usuarios', async (req, res) => {
    
    const criaUsuario = await usuario.create(req.body)

    res.json(criaUsuario)
})


app.listen(3000, () => {
    console.log("Servidor ligado.")
})
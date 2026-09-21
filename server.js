import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()

app.use(express.json()) // Mantém essa linha de segurança!
app.use('/', publicRoutes)

app.listen(3000, () => console.log("Servidor Rodando 🚀"))


//mongodb+srv://danielalves1406_db_user:<db_password>@users.vow29ta.mongodb.net/?appName=Users
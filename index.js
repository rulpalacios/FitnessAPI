import express from 'express'
import bodyParser from 'body-parser'
import routes from './config/routes'
import cors from 'cors'

const app = express()
const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOptions), routes)


app.get('/', (req, res) =>  res.send('Welcome to FitnessAPI'))
app.listen(8000, () => console.log('http://localhost:8000'))


export default app
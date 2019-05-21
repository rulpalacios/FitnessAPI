import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', routes)


app.get('/', (req, res) =>  res.send('Welcome to FitnessAPI'))
app.listen(8000, () => console.log('http://localhost:8000'))

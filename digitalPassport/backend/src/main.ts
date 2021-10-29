import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const DIST_DIR = path.join(__dirname, 'static')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(path.join(__dirname)))
app.use(express.static(DIST_DIR))
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})
app.use('/digitalPassport', express.static(path.join(__dirname, 'static')))

app.get('/api/ping', (req, res) => {
    res.send('pong')
})
require('./routes/index')(app)

app.listen(process.env.PORT || 5003)

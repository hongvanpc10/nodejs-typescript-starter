import 'dotenv/config'
import express from 'express'
import { PORT } from './configs/env'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const app = express()
const port = PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

import express, { urlencoded, Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.routes'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

// application routes
// user related routes
app.use('api/v1/user', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('University-management project on browser')
})
export default app

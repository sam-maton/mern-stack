import * as dotenv from 'dotenv'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { jobRouter } from './routers/jobRouter.js'
import mongoose from 'mongoose'

dotenv.config()

const app = new Hono()
if (process.env.NODE_ENV === 'development') {
  app.use(logger())
}

const port = process.env.PORT || 5100

app.get('/', (c) => c.text('Hello Node.js!'))
app.post('/', async (c) => {
  const body = await c.req.json()
  return c.json({ message: 'Hello Node.js!', data: body })
})

app.route('/api/v1/jobs', jobRouter)

app.notFound((c) => {
  c.status(404)
  return c.json({ message: 'Route not found' })
})

app.onError((err, c) => {
  console.error(`${err}`)
  return c.json({ message: 'An error has occured.' }, 500)
})

try {
  await mongoose.connect(process.env.MONGO_URL)

  serve(
    {
      fetch: app.fetch,
      port: port,
    },
    () => {
      console.log(`Server is running on http://localhost:${port}`)
    }
  )
} catch (error) {
  console.log(error)
  process.exit(1)
}

import { Hono } from 'hono'
import {
  getAllJobs,
  getJob,
  createJob,
  editJob,
  deleteJob,
} from '../controllers/jobController.js'

export const jobRouter = new Hono()

//Get all jobs
jobRouter.get('/', getAllJobs)

//Get a single job
jobRouter.get('/:id', getJob)

//Create a job
jobRouter.post('/', createJob)

//Edit job
jobRouter.patch('/:id', editJob)

//Delete job
jobRouter.delete('/:id', deleteJob)

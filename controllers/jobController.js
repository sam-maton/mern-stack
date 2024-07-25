import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'

export async function getAllJobs(c) {
  const allJobs = await Job.find()
  c.status(StatusCodes.OK)
  return c.json(allJobs)
}

export async function getJob(c) {
  const id = c.req.param('id')

  const job = await Job.findById(id)

  if (!job) {
    c.status(StatusCodes.NOT_FOUND)
    return c.json({ message: 'Job not found' })
  }

  return c.json({ data: job })
}

export async function createJob(c) {
  const { company, position } = await c.req.json()
  const job = await Job.create({ company, position })
  c.status(StatusCodes.CREATED)
  return c.json({ message: 'Job created successfully', data: job })
}

export async function editJob(c) {
  const { ['content-length']: contentLength, ['content-type']: contentType } =
    c.req.header()
  if (contentLength === '0' || !contentType === 'application/json') {
    c.status(StatusCodes.BAD_REQUEST)
    return c.json({ message: 'Please send some data to update' })
  }

  const id = c.req.param('id')
  const data = await c.req.json()
  const updatedJob = await Job.findByIdAndUpdate(id, data, {
    new: true,
  })

  c.status(StatusCodes.OK)
  return c.json({ message: 'Job updated successfully', data: updatedJob })
}

export async function deleteJob(c) {
  const id = c.req.param('id')
  const deletedJob = await Job.findByIdAndDelete(id)
  if (!deletedJob) {
    c.status(StatusCodes.NOT_FOUND)
    return c.json({ message: 'Job not found' })
  }

  c.status(StatusCodes.OK)
  return c.json({ message: 'Job deleted successfully' })
}

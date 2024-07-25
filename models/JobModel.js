import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ['applied', 'interview', 'rejected', 'offer', 'declined'],
      default: 'applied',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'freelance', 'internship'],
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'remote',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)

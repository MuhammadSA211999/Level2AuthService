import { Schema } from 'mongoose'
import { IUser } from './users.interface'
export const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ['Facult', 'Student', 'Admin'],
      default: 'Student',
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

import { Model, model } from 'mongoose'
import { IUser } from './users.interface'
import { userSchema } from './users.schema'

// an extra method
// interface IUserMethods {
//     fullName(): string;
//   }
// type UserModel = Model<IUser,object,IUserMethods>;

type UserModel = Model<IUser, object>
export const User = model<IUser, UserModel>('User', userSchema)
// database related sob query export kora User er upor run korbe

import config from '../../../confiq/index'
import { generatingCurrentUserId } from '../../../user.utils'
import { User } from './user.model'

import { IUser } from './users.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const genarateId = await generatingCurrentUserId()
  user.id = genarateId

  if (!user?.password) {
    user.password = config.userPass as string
  }
  const createdUser = await User.create(user)

  if (!createdUser?._id) {
    throw new Error('User does not crate')
  }
  return createdUser
}

export default {
  createUser,
}

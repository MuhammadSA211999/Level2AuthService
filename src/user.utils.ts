import { User } from './app/modules/users/user.model'

export const getLastUserIdFromDB = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  const lastUserId = lastUser?.id
  // if(lastUser?.id){
  //     return lastUser.id
  // }
  // else{
  //     return 0
  // }
  return lastUserId || 0
}

export const generatingCurrentUserId = async () => {
  // If there are no user in database the student id will 00000
  const lastUserId =
    (await getLastUserIdFromDB()) || (0).toString().padStart(5, '0') //00000
  //increament by 1
  const increamentedId = (+lastUserId + 1).toString().padStart(5, '0')
  return increamentedId
}

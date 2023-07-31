import { Request, Response } from 'express'
import userService from './user.service'

const userCreateCon = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'successfully created user',
      data: result,
    })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong!' })
  }
}

export default {
  userCreateCon,
}

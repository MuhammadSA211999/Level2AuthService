import mongoose from 'mongoose'
import app from './app'
import config from './confiq/index'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connect successfully')
    app.listen(config.port, () => {
      logger.info(`Application listen on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Database does not connect and error was', err)
  }
}

main()

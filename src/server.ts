import mongoose from 'mongoose'
import app from './app'
import config from './confiq/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connect successfully')
    app.listen(config.port, () => {
      console.log(`Application listen on port ${config.port}`)
    })
  } catch (err) {
    console.log('Database does not connect and error was', err)
  }
}

main()

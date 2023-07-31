import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, label, prettyPrint } = format

export const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    label({ label: process.env.PROJECT_NAME }),
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'loggs',
        'winston',
        'successes',
        'auth-%DATE%-success.log',
      ),
      datePattern: 'HH-DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '3d',
    }),
  ],
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(
    timestamp(),
    label({ label: process.env.PROJECT_NAME }),
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'loggs',
        'winston',
        'errors',
        'project-%DATE%-error.log',
      ),
      datePattern: 'HH-DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '3d',
    }),
  ],
})

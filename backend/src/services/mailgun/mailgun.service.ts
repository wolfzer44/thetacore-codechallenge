import mailgun from 'mailgun-js'
import Mail from '../../types/mail.type'
import dotenv from 'dotenv'
dotenv.config()

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
})

export const send = async (mail: Mail): Promise<object|boolean> => {
  const response = await mg.messages().send(mail)
  if (!response) return false
  return response
}

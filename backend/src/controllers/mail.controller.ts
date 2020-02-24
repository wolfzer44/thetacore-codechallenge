import { Request, Response } from 'express'
import Mail from '../types/mail.type'

interface MailTypes extends Request {
    body: Mail;
}

export const sendMail = async (req: MailTypes, res: Response) : Promise<Response> => {
  const { body: mail } = req
  return res.json(mail)
}

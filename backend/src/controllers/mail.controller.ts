import { Request, Response } from 'express'
import Mail from '../types/mail.type'
import { mailgun } from '../services/services'
interface MailTypes extends Request {
    body: Mail;
}

export const sendMail = async (req: MailTypes, res: Response) : Promise<Response> => {
  try {
    const { body: mail } = req

    if (!mail.from || !mail.to || !mail.subject || !mail.text) return res.status(400).json({ message: 'Missing parameters' })

    const response = await mailgun.send(mail)
    if (!response) return res.status(400).json({ message: 'Something went wrong' })

    return res.status(200).json(response)
  } catch (err) {
    res.status(400).json(err)
  }
}

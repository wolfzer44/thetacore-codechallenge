import { Router } from 'express'
import { sendMail } from '../../controllers/mail.controller'
const routes = Router()

routes.post('/', sendMail)

export default routes

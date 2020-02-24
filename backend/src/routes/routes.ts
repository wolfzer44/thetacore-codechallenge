import { Router } from 'express'
import MailRoutes from './mail/mail.router'
const routes = Router()

routes.use('/mail', MailRoutes)

export default routes

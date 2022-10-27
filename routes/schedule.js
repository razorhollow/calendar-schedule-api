
import { Router } from 'express'
import * as scheduleCtrl from '../controllers/schedule.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, scheduleCtrl.index)


export { router }

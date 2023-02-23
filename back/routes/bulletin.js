import { Router } from 'express'
import admin from '../middleware/admin.js'
import { jwt } from '../middleware/auth.js'
import { createBulletin, getAllBulletin } from '../controllers/bulletin.js'// getAllBulletin

const router = Router()

router.post('/create', jwt, admin, createBulletin)
router.get('/', getAllBulletin)
// router.delete('/delete/', jwt, admin, deleteArticles)
export default router

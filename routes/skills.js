import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

//localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET - localhost:3000/todos/new
router.get("/new", skillsCtrl.new)
//localhost:3000/skills/:id
router.get('/:id', skillsCtrl.show)

//POST - localhost:3000/todos
router.post('/', skillsCtrl.create)

//DELETE - localhost:3000/todos/:id
router.delete('/:id', skillsCtrl.delete)
export {
  router
}

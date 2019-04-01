const router = require('express').Router()
const UserController = require('../controllers/userController')
const { isLogedIn } = require('../middlewares/authentication')
const { isAdmin } = require('../middlewares/authorization')

router.get('/users', isLogedIn, isAdmin, UserController.findAll)
router.get('/users/:id', isLogedIn, UserController.findOne)
router.post('/users', isLogedIn, isAdmin, UserController.create)
router.put('/users/:id', isLogedIn, UserController.update)
router.delete('/users/:id', isLogedIn, isAdmin, UserController.delete)
router.post('/signin', UserController.signIn)

module.exports = router
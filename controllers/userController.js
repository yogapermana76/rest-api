const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserController {
  static create(req, res) {
    User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAll(req, res) {
    User.findAll()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static findOne(req, res) {
    User.findByPk(req.params.id)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(500)
      })
  }

  static update(req, res) {
    User.update({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    }, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
      .then(user => {
        res.status(200).json(user[1][0])
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500)
    })
  }

  static signIn(req, res) {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if(!user) {
        res.status(404).json({
          message: 'vusername atau password salah'
        })
      } else {
        const verification = bcrypt.compareSync(req.body.password, user.password);
        if(!verification) {
          res.status(401).json({
            message: 'username atau password salah'
          })
        } else {
          const token = jwt.sign({
            username: user.username,
            role: user.role
          }, process.env.JWT_SECRET)
          // req.headers.token = token
          res.status(200).json({
            message: 'login berhasil',
            token: token
          })
        }
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}


module.exports = UserController
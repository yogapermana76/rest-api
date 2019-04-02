const jwt = require('jsonwebtoken')
// const { User } = require('../models')

module.exports = {
  isLogedIn(req, res, next) {
    // try {
    //   const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    //   req.authenticatedUser = decoded
    //   // User.findByPk(req.params.id)
    //   //   .then(user => {
    //   //     if(user && user.username === req.authenticatedUser.username) {
    //   //       next()
    //   //     } else {
    //   //       res.status(401).json({
    //   //         message: 'tidak bisa akses data ini'
    //   //       })
    //   //     }
    //   //   })
    //   next()
    // } catch(err) {
    //   res.status(401).json(err)
    // }

    try {
      const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
      req.authenticatedUser = decoded
      next()
    } 
    catch {
      res.status(401).json({
        message:'Failed to authenticate user'
      })
    }
  }
}
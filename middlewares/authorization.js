module.exports = {
  isAdmin(req, res, next) {
    try {
      if(!req.headers.token) {
        res.status(401).json({
          message: 'error'
        })
      } else {
        if(req.authenticatedUser.role == 'admin') {
          next()
        } else {
          res.status(403).json({
            message: 'anda tidak boleh mengakses halaman ini'
          })
        }
      }
    } catch (err) {
      res.status(401).json(err)
    }
  }
}
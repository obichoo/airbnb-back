function verifyOwner(req, res, next) {
  if (!req.userToken.role == 'admin' || req.userToken.role == 'OWNER') {
    return res.status('401').send({
      auth: false,
      message: "You must be an owner"
    })
  }
  next();
}

module.exports = verifyOwner;
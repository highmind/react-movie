module.exports = function(app) {

  app.post('/login', function(req, res) {
    return res.json({
      cat: req.body.username,
      color: req.body.password
    });
  })
  
}

var {User} = require('./../models/user')
var authentice = (req, res, next) =>{
    var token = req.header('x-auth')
    User.findByToken (token).then((user) => {
   if (!user) {
   //  res.status(401).send();
   return Promise.reject();
   }
  
   req.user= user;
   req.token = token;
   next();
    }).catch((e) => {
      res.status(401).send();
    });
  };

  module.exports= {authentice}
 function adminMidd(req, res, next)  {
    if (typeof req.session.userLogged !="undefined"){
         if(req.session.userLogged.categoria_id == 2){
             return next()
         }
     }
     return res.redirect("/")
 }
 module.exports = adminMidd
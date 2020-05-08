const route = require('express').Router()

route.get('/',(req,res) => {
    if(req.user){
        return res.send("visible to only looged in user")
    } else{
        res.redirect('/login')
    }
})


exports = module.exports = route
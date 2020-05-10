const route = require('express').Router()

const passport = require('../passport')
const Users = require('../db').Users

route.get('/',(req,res) => {
    res.render('login')
})
route.get('/login',(req,res) => {
    res.render('login')
})
route.get('/signup',(req,res) => {
    res.render('signup')
})
route.post('/login',passport.authenticate('local',{
    failureRedirect: '/login',
    successRedirect: '/private'
}))

route.post('/signup',(req,res)=>{
    Users.create({
        username : req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastname: req.body.lastname
    }).then((createUser) => {
        res.redirect('/login')
    })
})


exports = module.exports = route
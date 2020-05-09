const express = require('express')
const session = require('express-session')
const passport = require('./passport')


const PORT = process.env.PORT || 9876
const app = express()

app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'somesecretstring'
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))
app.use('/',require('./routes/root'))

app.listen(PORT,()=> console.log("server running on http://localhost:9876"))

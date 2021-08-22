const express = require('express')
const app = express()
const router = require('./routers/index')
const nunjucks = require('nunjucks')

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
nunjucks.configure('views', {
    express: app
})

app.set('view engine', 'html')

app.use('/', router)

app.listen(3000, ()=>{
    console.log('port at 3000')
})
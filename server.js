const { response } = require('express')
const { request } = require('http')

let app = require('express')()

app.set('view engine', 'ejs')

app.get('/', (request, response)=> {
    response.render('pages/index', {test:'Salut'})
})

app.listen(80)
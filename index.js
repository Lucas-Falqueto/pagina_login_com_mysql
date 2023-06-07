const express = require('express')
const db = require('./routes/db-config')
const app = new express();
const cookie = require('cookie-parser')
// const path = require("path")
require('dotenv').config();
const PORT = process.env.PORT || 5000

app.use('/js', express.static(__dirname + '/public/js'))
app.use('/css', express.static(__dirname + '/public/css'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(cookie())
app.use(express.json());
db.connect((err) => {
    if (err) throw err;
    console.log('Connected Database!!')
})
app.use('/', require('./routes/pages')) //rotas das paginas
app.use('/api/', require('./controllers/auth')) //rotas de autenticação
app.listen(PORT)
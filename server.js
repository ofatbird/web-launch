const express = require('express')
const path = require('path')
const app = express()

app.use('/static', express.static(path.resolve(__dirname,'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.get('/', (req, res) => {
	res.render('index')
})

app.listen('3000', () => {
	console.log('opened')
})
import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/sobremim', (req, res) => {
    res.render('about')
})

app.get('/solucoes', (req, res) => {
    res.render('solutions')
})

app.get('*', (req, res) => {
    res.status(404).render('error')
})

app.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port)
    console.log('Acesse em: localhost:' + port)
})

export { app }

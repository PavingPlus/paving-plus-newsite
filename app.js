// Imports
const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
// Static Files
app.use(express.static('public'));
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index')
})

app.get('/about-us', (req, res) => {
    res.render('about')
})

app.get('/product', (req, res) => {
    res.render('about')
})

app.get('/contact-us', (req, res) => {
    res.render('about')
})

app.get('/team', (req, res) => {
    res.render('about')
})

app.get('/brochure', (req, res) => {
    res.download("./public/doc/Page.pdf")
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(port, () => console.info(`App listening on port ${port}`))
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const path = require('path')

const config = require('./config')
const todoRoutes = require('./routes/todos')
const notesRoutes = require('./routes/notes')
const indexRoutes = require('./routes/index')

const app = express()

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'static')))
app.use(expressLayouts)
app.use(todoRoutes)
app.use(notesRoutes)
app.use(indexRoutes);

(async function start() {
    try {
        await mongoose.connect(config.DB, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(config.PORT, () => {
            console.log(`Connected at port ${config.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
})()
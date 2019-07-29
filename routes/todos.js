const Router = require('express')
const TODO = require('../models/todo')
const router = Router()

router.get('/todos', async (req, res) => {
    const todos = await TODO.find({})

    res.render('todos', {
        pageTitle: 'TODOs',
        todos
    })
})



router.get('/todos/create', (req, res) => {
    res.render('todos-create', {
        pageTitle: 'TODOs create'
    })
})

router.post('/create_todo', async (req, res) => {
    const todo = new TODO({
        text: req.body.text
    })
    await todo.save()
    res.redirect('/todos')
})



module.exports = router
const Router = require('express')
const TODO = require('../models/todo')
const Note = require('../models/note')

const router = Router()


router.get('/',async (req, res)=>{
    const todos = await TODO.find({})
    const notes = await Note.find({})

    res.render('index',{
        pageTitle:'Home',
        todos,
        notes
    })
})


module.exports = router
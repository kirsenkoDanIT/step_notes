const Router = require('express')
const List = require('../models/list')
const Note = require('../models/note')

const router = Router()


router.get('/',async (req, res)=>{
    const lists = await List.find({})
    const notes = await Note.find({})

    res.render('index',{
        pageTitle:'Home',
        lists,
        notes
    })
})


module.exports = router
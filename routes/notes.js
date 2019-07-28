const Router = require('express')
const Note = require('../models/note')
const router = Router()

router.get('/notes',async (req, res)=>{
    const notes = await Note.find({})
    res.render('notes',{
        pageTitle:'Notes',
        notes
    })
})

router.get('/notes/create', (req, res) => {
    res.render('notes-create', {
        pageTitle: 'notes create'
    })
}).post('/notes/create', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        body: req.body.body
    })
    await note.save()
    res.redirect('/notes')
})

module.exports = router
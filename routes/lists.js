const Router = require('express')
const List = require('../models/list')
const router = Router()

router.get('/lists', async (req, res) => {
    const lists = await List.find({})

    res.render('lists', {
        pageTitle: 'Lists',
        lists
    })
})



router.get('/lists/create', (req, res) => {
    res.render('lists-create', {
        pageTitle: 'lists create'
    })
}).post('/list/create', async (req, res) => {
    const list = new List({
        text: req.body.text
    })
    await list.save()
    res.redirect('/lists')
})



module.exports = router
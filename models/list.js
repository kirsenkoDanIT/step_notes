const {
    Schema,
    model
} = require('mongoose')

const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    complited: {
        type: Boolean,
        default: false
    }
})

module.exports = model('List', schema)

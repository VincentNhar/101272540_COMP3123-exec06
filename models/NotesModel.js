const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type:String,

    },
    priority:{
        type: String,
        required: true,
        enum: ["HIGH","LOW","MEDIUM"]
    },
    content: String,
    dateAdded: Date,
    dateUpdated: Date
})

module.exports = mongoose.model("Notes", noteSchema)
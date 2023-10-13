const express = require("express")
const noteModel = require('../models/NotesModel');
const routes = express.Router()

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    try{
        const newNote = new noteModel({
            ...req.body
        })

        await newNote.save()

        res.status(201).send(newNote)
    }catch(error){
        res.status(500).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    try{
        const notesList = await noteModel.find({})
        res.status(200).send(notesList)
    }catch(error){
        res.status(500).send(error)
    }

});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try{
        const note = await noteModel.findById(req.params.noteId)

        res.status(200).send(note)
    }catch(error){
        res.status(500).send(error)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try{
        await noteModel.findByIdAndUpdate(req.params.noteId,req.body)

        res.status(200).send({message:"Note info has been updated"})
    }catch(error){
        res.status(500).send(error)
    }

});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try{
        const note = await noteModel.findByIdAndDelete(req.params.noteId)

        res.status(200).send({message:`${note.title} has been deleted`})
    }catch(error){
        res.status(500).send(error)
    }

});

module.exports = routes
const Note = require('../models/note');

// all or one note
exports.getNotes = async (req, res) => {
    if (req.query.id == null) {
        try {
            const notes = await Note.find();
            res.json(notes);

            res.status(200);
        } catch (err) {
            res.status(500).send('Server Error');
            //throw new Error(err);
        }
    } else {
        try {
            const id = req.query.id;
    
            const notes = await Note.find({"_id":id});
            res.json(notes);
            
            res.status(200).end();
        } catch (err) {
            res.status(500).send('Server Error');
            //throw new Error(err);
        }
    }
}

// create note
exports.createNote = async (req, res) => {

    try {
        let note = new Note;

        note.title = req.body.title;
        note.content = req.body.content;

        await Note.insertMany(note);

        console.log("created note");

        res.status(200).end();
    } catch (err) {
        res.status(500).send('Server Error');
        //throw new Error(err);
    }
}

// update note
exports.updateNote = async (req, res) => {
    try {
        const id = req.query.id;

        if (id == null) {
            throw new Error('No id specified');
        }
    
        const notes = await Note.findOne({"_id":id});

        if (!notes) {
            throw new Error("No notes found");
        }

        let title = notes.title;
        let content = notes.content;
        let lastModified = notes.lastModified;

        if (req.body.title != null) {
            title = req.body.title;
            lastModified = new Date();
        }
        if (req.body.content != null) {
            content = req.body.content;
            lastModified = new Date();
        }

        await Note.updateOne({"_id":notes._id}, {$set:{"title":title,"content":content,"lastModified":lastModified}});
        
        console.log("updated note");

        res.status(200).end();
    } catch (err) {
        res.status(500).send('Server ' + err);
        //throw new Error(err);
    }
}

// delete note
exports.deleteNote = async (req, res) => {
    try {

        const id = req.query.id;

        if (id == null) {
            throw new Error('No id specified');
        }
    
        const notes = await Note.findOne({"_id":id});

        if (!notes) {
            res.status(200).end();
            console.log("\x1b[38;5;196mDeleted Empty set\x1b[0m");
            return;
        }

        await Note.deleteOne({"_id":notes._id});

        console.log("deleted note");
        res.status(200).end();
    } catch (err) {
        console.log(err);
        res.status(500).send('Server ' + err);
    }
}
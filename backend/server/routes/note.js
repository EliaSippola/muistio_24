const exp = require("express");
const router = exp.Router();
const notesController = require("../controllers/note_controller.js");

// one note and all notes
router.get('/', notesController.getNotes);

// new note
router.post('/', notesController.createNote);

// update note
router.put('/', notesController.updateNote);

router.delete('/', notesController.deleteNote);

//export
module.exports = router;
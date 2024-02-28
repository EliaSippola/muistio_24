import React, { useState } from "react";
import { update } from '../api/notes';

function NoteDisplay({note, fetchNotes, selectId, updateSite}) {

    const [textContent, setContent] = useState(note.content);
    const [title, setTitle] = useState(note.title);

    // updating note
    const handleUpdate = async () => {
        const newContent = textContent;
        const newTitle = title;

        if (newTitle !== null && newTitle !== '' && newTitle !== undefined) {
            if (newContent) {
                await update(note._id, { ...note, content: newContent, title: newTitle });
                fetchNotes();
    
                updateSite();
            }
        } else {
            alert("Title can't be empty!");
        }
    }

    return (
        <div hidden={selectId !== note._id}>
            <div id="noteDetails">
                <input type="text" name={note._id} className="noteHeader" onChange={(cont) => setTitle(cont.target.value)} defaultValue={note.title} spellCheck="false"></input>
                <div id="updateButton" onClick={handleUpdate}>save</div>
            </div>
            <textarea name={note._id} className="noteText" onChange={(cont) => setContent(cont.target.value)} defaultValue={note.content} spellCheck="false"></textarea>
        </div>
    );
}

export default NoteDisplay;
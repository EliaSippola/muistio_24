import React from "react";
import { remove } from '../api/notes';

// dalate and update form
function Note({ note, fetchNotes, selectingId, selectId, updateSite }) {
    // deleting note
    const handleDelete = async () => {
        
        await remove(note._id);

        await fetchNotes();
        updateSite();
    }

    const handleSelect = async (id) => {
        selectingId(id);
    }

    // showing note
    return (
        <div className={`note ${selectId === note._id && 'selected'}`}>
            <h2 onClick={() => {handleSelect(note._id)}}>{note.title}</h2>
            <button onClick={handleDelete}>Del</button>
        </div>
    );
}

export default Note;

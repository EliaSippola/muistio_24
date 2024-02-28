import React from "react";
import Note from './Note';

// list notes
function NoteList({ notes, fetchNotes, selectingId, selectId, updateSite }) {
    return (
        <div>
            {notes.map(note => (
                <Note key={note._id} note={note} fetchNotes={fetchNotes} selectingId={selectingId} selectId={selectId} updateSite={updateSite} />
            ))}
        </div>
    )
}

export default NoteList;
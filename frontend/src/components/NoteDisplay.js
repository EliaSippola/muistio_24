import React from "react";
import NoteText from "./NoteText";

function NoteDisplay({notes, fetchNotes, selectId, updateSite}) {

    return (
        <div>
            {notes.map(note => (
                <NoteText key={note._id} note={note} fetchNotes={fetchNotes} selectId={selectId} updateSite={updateSite} />
            ))}
        </div>
    );
}

export default NoteDisplay;
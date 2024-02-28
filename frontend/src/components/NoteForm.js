import React, { useState} from "react";
import { create } from '../api/notes';

let preventDouble = 0;

function NoteForm({ fetchNotes, updateSite }) {
    // vars
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // handling submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (preventDouble === 1) {
            return;
        }

        await create({ title, content });

        await fetchNotes();
        setTitle('');
        setContent('');

        updateSite();
    }

    // createnoteform
    return (
        <form onSubmit={handleSubmit} className="noteForm">
            <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <button type="submit">Create note</button>
            <textarea
                hidden={true}
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </form>
    )
}

export default NoteForm;
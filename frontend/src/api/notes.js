const baseUrl = 'http://localhost:3000/api/notes';

// get all notes
export const getAll = async () => {
    const res = await fetch(baseUrl);
    return res.json();
}

// create note
export const create = async (note) => {
    await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(note)
    });
}

// update note
export const update = async (id, newNote) => {
    await fetch(`${baseUrl}?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newNote)
    });
}

// remove note
export const remove = async (id) => {
    await fetch(`${baseUrl}?id=${id}`, {
        method: 'DELETE'
    });
}
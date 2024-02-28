import React, {useEffect, useState} from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import {getAll} from '../api/notes';
import NoteDisplay from './NoteDisplay';
import '../css/app.css';

function App() {

  // notes
  const [notes, setNotes] = useState([]);

  // updating site
  const [update, setUpdate] = useState(0);

  const updateSite = () => {
    setUpdate(0);
  }

  // get notes
  useEffect(() => {
    fetchNotes();
  }, [update]);

  const fetchNotes = async () => {
    const res = await getAll();
    setNotes(res);
  }

  const [selectId, setSelectId] = useState('');

  const selectingId = (val) => {
    setSelectId(val);
  }

  useEffect(() => {
    selectingId();
  }, []);


  // page layout
  return (
    <div>
      <h1>Notepad</h1>
      <NoteForm fetchNotes={fetchNotes} updateSite={updateSite} selectingId={selectingId} />
      <div id="notegrid">
        <div id="noteList">
          <NoteList notes={notes} fetchNotes={fetchNotes} selectingId={selectingId} selectId={selectId} updateSite={updateSite} />
        </div>
        <NoteDisplay notes={notes} fetchNotes={fetchNotes} selectId={selectId} updateSite={updateSite} />
      </div>
    </div>
  );
}

export default App;

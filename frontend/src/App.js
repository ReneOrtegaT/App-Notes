import React, { useState, useEffect } from 'react';
import { fetchNotes, addNote, deleteNote, updateNote, archiveNote } from './services/NoteService';
import NoteList from './components/NoteList';
import './styles/styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState({ id: null, content: '' });

  useEffect(() => {
    const getNotes = async () => {
      try {
        const notesData = await fetchNotes();
        setNotes(notesData);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    getNotes();
  }, []);

  const handleEditNoteContentChange = (event) => {
    setEditingNote({ ...editingNote, content: event.target.value });
  };

  const editNote = (id, content) => {
    setEditingNote({ id, content });
  };

  const saveEditedNote = async (id) => {
    try {
      await updateNote(id, editingNote.content);
      const updatedNotes = notes.map((note) => (note.id === id ? { ...note, content: editingNote.content } : note));
      setNotes(updatedNotes);
      setEditingNote({ id: null, content: '' });
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleArchiveNote = async (id, isArchived) => {
    try {
      await archiveNote(id, !isArchived);
      const updatedNotes = notes.map((note) => (note.id === id ? { ...note, isArchived: !isArchived } : note));
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error archiving/unarchiving note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleAddNote = async (content) => {
    try {
      const newNote = await addNote(content);
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const noteHeight = 120; 

return (
  <div className="container">
    <h1>Notes App</h1>
    <div className="section">
      <h2>Add New Note</h2>
      <div className="central-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddNote(e.target.noteContent.value);
            e.target.noteContent.value = '';
          }}
        >
          <input type="text" name="noteContent" />
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
    <div className="section">
      <h2>Active Notes</h2>
      <div className="active-notes-container" style={{ maxHeight: noteHeight * 4 }}>
        <NoteList
          notes={notes.filter((note) => !note.isArchived)}
          editNote={editNote}
          deleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
          editingNoteId={editingNote.id}
          editedNoteContent={editingNote.content}
          handleEditNoteContentChange={handleEditNoteContentChange}
          saveEditedNote={saveEditedNote}
        />
      </div>
    </div>
    <div className="section">
      <h2>Archived Notes</h2>
      <div className="archived-notes-container" style={{ maxHeight: noteHeight * 4 }}>
        <NoteList
          notes={notes.filter((note) => note.isArchived)}
          editNote={editNote}
          deleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
          editingNoteId={editingNote.id}
          editedNoteContent={editingNote.content}
          handleEditNoteContentChange={handleEditNoteContentChange}
          saveEditedNote={saveEditedNote}
        />
      </div>
    </div>
  </div>
);

 
};

export default App;












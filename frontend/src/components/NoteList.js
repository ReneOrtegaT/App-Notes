import React from 'react';
import Note from './Note';
import '../styles/styles.css';

const NoteList = ({ notes, editNote, deleteNote, handleArchiveNote, editingNoteId, editedNoteContent, handleEditNoteContentChange, saveEditedNote }) => {
  return (
    <div className="notes-list-container">
      {notes.map((note) => (
        <div key={note.id}>
          <Note
            note={note}
            editNote={editNote}
            deleteNote={deleteNote}
            handleArchiveNote={handleArchiveNote}
            editingNoteId={editingNoteId}
            editedNoteContent={editedNoteContent}
            handleEditNoteContentChange={handleEditNoteContentChange}
            saveEditedNote={saveEditedNote}
          />
        </div>
      ))}
    </div>
  );
};

export default NoteList;







import React from 'react';
import '../styles/styles.css';

const Note = ({
  note,
  editNote,
  deleteNote,
  handleArchiveNote,
  editingNoteId,
  editedNoteContent,
  handleEditNoteContentChange,
  saveEditedNote,
}) => {
  const isEditing = editingNoteId === note.id;

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
  };

  const handleEditButtonClick = () => {
    editNote(note.id, note.content);
  };

  const handleSaveButtonClick = () => {
    saveEditedNote(note.id);
  };

  return (
    <div className="note-item">
      <div className="note-content">
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              value={editedNoteContent}
              onChange={handleEditNoteContentChange}
            />
            <button className="save-button" onClick={handleSaveButtonClick}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <span>
              <strong>Nota:</strong> {note.content}
            </span>
          </div>
        )}
      </div>
      <div className="note-buttons">
        {!isEditing && (
          <button className="edit-button" onClick={handleEditButtonClick}>
            Edit
          </button>
        )}
        <button className="delete-button" onClick={() => handleDeleteNote(note.id)}>
          Delete
        </button>
        <button className="archive-button" onClick={() => handleArchiveNote(note.id, note.isArchived)}>
          {note.isArchived ? 'Unarchive' : 'Archive'}
        </button>
      </div>
    </div>
  );
};

export default Note;




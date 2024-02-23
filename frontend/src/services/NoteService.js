const fetchNotes = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/notes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

const addNote = async (content) => {
  try {
    const response = await fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding note:', error);
    throw error;
  }
};

const deleteNote = async (id) => {
  try {
    await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};

const updateNote = async (id, content) => {
  try {
    await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

const archiveNote = async (id, isArchived) => {
  try {
    await fetch(`http://localhost:5000/api/notes/${id}/archive`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isArchived }),
    });
  } catch (error) {
    console.error('Error archiving/unarchiving note:', error);
    throw error;
  }
};

export { fetchNotes, addNote, deleteNote, updateNote, archiveNote };

  
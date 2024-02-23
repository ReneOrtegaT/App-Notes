const Note = require('../models/Note');

const getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).send('Server Error');
  }
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const note = await Note.findByPk(id);
    
    if (note) {
      note.content = content;
      await note.save();
      res.status(200).json({ message: 'Note updated successfully', note });
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    console.error('Error updating note:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const archiveNote = async (req, res) => {
  const { id } = req.params;
  const { isArchived } = req.body;

  try {
    const note = await Note.findByPk(id);
    if (note) {
      await Note.update({ isArchived }, { where: { id } });
      res.status(200).json({ message: `Note ${isArchived ? 'archived' : 'unarchived'} successfully` });
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    console.error('Error updating note archive status:', error);
    res.status(500).send('Server Error');
  }
};

const addNote = async (req, res) => {
  const { content } = req.body;
  try {
    const newNote = await Note.create({ content });
    res.status(201).json(newNote);
  } catch (error) {
    console.error('Error adding note:', error);
    res.status(500).send('Server Error');
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCount = await Note.destroy({ where: { id } });
    if (deletedCount) {
      res.status(200).json({ message: 'Note deleted successfully' });
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getNotes,
  updateNote,
  archiveNote,
  addNote,
  deleteNote,
};


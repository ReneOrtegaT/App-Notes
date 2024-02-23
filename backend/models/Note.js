const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); 

const Note = sequelize.define('Note', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, 
  },
});

module.exports = Note;

  




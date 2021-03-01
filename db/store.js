// Javascript node file system and utilities packages 
const fs = require('fs');
const util = require('util');
// Uniqid package to assign ID's to notes being stored in the database
const uniqid = require('uniqid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// New class to define and store database functions
class Store {
    read() {
        return readFile('db/db.json', 'utf8');
    }

    write(note) {
        return writeFile('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            }
            catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    };

    addNote(note) {
        const {title, text} = note;

        if (!title || !text) {
            throw new Error("Title and text must both be filled");
        };

        const newNote = { title, text, id: uniqid() };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    };

    removeNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id != id))
            .then((filteredNotes) => this.write(filteredNotes));
    };
};

// Exporting Store class
module.exports = new Store();
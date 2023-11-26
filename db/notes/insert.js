require('dotenv').config();
const HOME = process.env.HOME_PATH
const { client } = require(`${HOME}/db/client`);

const insertNotes = async (notes) => {
    const db = client.db('notes-app');
    const notesCollection = db.collection('notes');

    const response = await notesCollection.insertMany(notes);
    console.log(response);

    await client.close();
}

const insertNote = async (note) => {
    const db = client.db('notes-app');
    const notesCollection = db.collection('notes');

    const response = await notesCollection.insertOne(note);
    console.log(response);

    await client.close();
}

if (require.main === module) {
    const file = process.argv[2];
    if (!file) {
        console.log("[Error] Please provide a file");
        console.log("Usage: node insert-note.js <file>.json");
        process.exit(1);
    }
    const notes = require(file);
    insertNotes(notes);
}

module.exports = {
    insertNotes,
    insertNote
}
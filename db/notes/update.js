require('dotenv').config();
const HOME = process.env.HOME_PATH
console.log(`${HOME}/db/client`);
const { client } = require(`${HOME}/db/client`);

const updateNotes = async (notes) => {
    const db = client.db('notes-app');
    const notesCollection = db.collection('notes');

    const response = await notesCollection.updateMany({}, { $set: notes });

    await client.close();

    return response;
}

const updateNoteById = async (note_obj) => {
    const db = client.db('notes-app');
    const notes = db.collection('notes');

    const query = { id: note_obj.id };
    const newValues = {
        $set: {
            title: note_obj.title,
            subtitle: note_obj.subtitle,
            body: note_obj.body
        }
    };

    const response = await notes.updateOne(query, newValues);
    await client.close();

    return response;
}

if (require.main === module) {
    const file = process.argv[2];
    if (!file) {
        console.log("[Error] Please provide a file");
        console.log("Usage: node update-note.js <file>.json");
        process.exit(1);
    }
    const notes = require(file);
    const status = updateNotes(notes);
    console.log(status);
}

module.exports = {
    updateNotes,
    updateNoteById
}
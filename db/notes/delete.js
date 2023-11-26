require('dotenv').config();
const HOME = process.env.HOME_PATH
const { client } = require(`${HOME}/db/client`);

const deleteNotes = async (filter) => {
    const db = client.db('notes-app');
    const notes = db.collection('notes');

    const response = await notes.deleteMany(filter);
    await client.close();

    return response;
}

const deleteNoteById = async (id) => {
    const db = client.db('notes-app');
    const notes = db.collection('notes');

    const query = { id: id };
    const response = await notes.deleteOne(query);
    await client.close();

    return response;
}

if (require.main === module) {
    num = parseInt(process.argv[2]);
    if (!num) {
        console.log("[Error] Please provide a number");
        console.log("Usage: node delete-note.js <number>");
        process.exit(1);
    }
    const status = deleteNoteById(num);
    console.log(status);
}

module.exports = {
    deleteNotes,
    deleteNoteById
}
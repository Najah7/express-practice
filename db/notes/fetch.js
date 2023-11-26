require('dotenv').config();
const HOME = process.env.HOME_PATH
const { client } = require(`${HOME}/db/client`);

const fetchAllNotes = async () => {
    const db = client.db('notes-app');
    const notes = db.collection('notes');

    const response = await notes.find({}).toArray();
    console.log(response);

    await client.close();
}

const fetchNoteById = async (id) => {
    const db = client.db('notes-app');
    const notes = db.collection('notes');

    const query = { id: id };
    const response = await notes.findOne(query);
    console.log(response);

    await client.close();
}

if (require.main === module) {
    num = parseInt(process.argv[2]);
    if (!num) {
        console.log("[Error] Please provide a number");
        console.log("Usage: node fetch-note.js <number>");
        process.exit(1);
    }
    fetchNoteById(num);
}

module.exports = {
    fetchAllNotes,
    fetchNoteById
}
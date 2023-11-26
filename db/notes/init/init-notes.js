require('dotenv').config();
const HOME = process.env.HOME_PATH
const { client } = require(`${HOME}/db/client`);

const createNotes = async () => {
    const db = client.db('notes-app');
    const notes = db.collection('notes');

    const query = [{
        id: 1,
        title: 'Title of Note 1',
        subtitle: 'Subtitle of Note 1',
        body: 'Body of Note 1'
    },
    {
        id: 2,
        title: 'Title of Note 2',
        subtitle: 'Subtitle of Note 2',
        body: 'Body of Note 2'
    }];

    const response = await notes.insertMany(query);
    await client.close();

    return response;
}

if (require.main === module) {
    const notes = createNotes();
    console.log(notes);

}
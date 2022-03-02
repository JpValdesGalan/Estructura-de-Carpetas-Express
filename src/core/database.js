const { MongoClient, BulkWriteResult } = require('mongodb');
const mongoURL = 'mongodb+srv://jpvaldesg:Hhu2m1jaKu2aTx04@cluster0.ta6mm.mongodb.net/iteso_2022?retryWrites=true&w=majority';

const Database = {
    dbInstance: null,
    connect: () => {
        return new Promise ((accept, reject) => {
            MongoClient.connect(mongoURL, {useUnifiedTopology: true}, (err, client) => {
                this.dbInstance = client.db();
                accept(client);
            }); //Error-first callback
        });
    },
    collection: (name) => {
        return this.dbInstance.collection(name);
    }
};

module.exports = Database;
const Database = require('./../../core/database');

class User {
    collection;
    constructor() {
        // Set collection
        this.collection = Database.collection('users');
    }

    getAll() {
        return new Promise((accept, reject) => {
            this.collection.find().toArray((err, results) => {
                if (err) {
                    reject(err);
                } else {
                    accept(results);
                }
            });
        });
    }
}

module.exports = User;
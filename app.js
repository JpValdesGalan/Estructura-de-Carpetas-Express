const express = require('express');
const path = require('path');
const Database = require('./src/core/database.js');

//Load Routes
const apiRoutes = require('./src/routes/api.js');

//Init App
const app = express();
const port = process.env.PORT || 3000;

//Use Route middlewares
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use('/', apiRoutes);

//Set main endpoint
app.use('/', (req, res) => {
    const indexPath = path.join(__dirname, 'src', 'index.html');
    res.sendFile(indexPath);
});

//Connect to database
/*const mongoURL = 'mongodb+srv://jpvaldesg:Hhu2m1jaKu2aTx04@cluster0.ta6mm.mongodb.net/iteso_2022?retryWrites=true&w=majority'
MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
    //Error-first callback
    if(err) {
        //Something failed
        console.log('Algo fallo', err);
    } else {
        //Connected Succesfully
        const db = client.db();
        console.log('Database: ', db);

        //Listen to port
        app.listen(port, function() {
            console.log('app is running in port ' + port + '...');
        });
        
        const collection = db.collection('user');
    }
});*/

Database.connect().then(() => {
    // Listen Port
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log('App is listening to port ' + port);
    });
});
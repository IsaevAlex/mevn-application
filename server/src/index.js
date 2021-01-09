const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(config.port, (error) => {
    if(error) {
        throw error;
    }

    console.log(`Express server listening on port ${config.port}`);
});

app.use(require('./routes/posts'));

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
});


mongoose.connect(config.dbURL, config.dbOptions);
// mongoose.connection
//     .once('open', () => {
//         console.log(`Mongoose - successful connection ...`);
//         app.listen(config.port,
//             () => console.log(`Server start on port ${config.port} ...`));
//     })
//     .on('error', error => console.warn(error));
//


const mongoose = require('mongoose');

// Map golbal promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://suyash:pusherpoll@ds213239.mlab.com:13239/pusherpoll')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((e) => {
        console.log(e);
    })



module.exports = mongoose;
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/person',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

    (err) => {
        !err ? console.log(`MongoDB connected`) 
            : console.log(`MongoDB disconnected: ${err}`)
    }
)


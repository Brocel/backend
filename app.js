const express = require('express'); // import express package
const bodyParser = require('body-parser');

const app = express();

// app use cycle
// Exemple 1 : 
// app.use((req, res) => {

//     res.json({ message: 'Your request was sucessful !' });
// });
// Exemple 2 : (middleware with next)
// app.use((req, res, next) => {
//     console.log('Request received !');
//     next();
// });

// app.use((req, res, next) => {
//     res.status(201);
//     next;
// });

// app.use((req, res, next) => {
//     res.json({ message: 'Your request was sucessful !' });
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Response sent successfully !');
// });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzoei',
            title: 'My first thing', 
            description: 'All of the info about my first thing',
            imageUrl: '',
            price: 4900,
            userId: 'qsomihvqios',
        }, 
        {
            _id: 'oeihfzeomoihi',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: '',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

app.post('api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Thing created successfully ! '
    });
});

// export app as a module
module.exports = app;
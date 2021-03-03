const express = require('express'); // import express package

const app = express();

// app use cycle
// Exemple 1 : 
// app.use((req, res) => {

//     res.json({ message: 'Your request was sucessful !' });
// });
// Exemple 2 : (with next)
app.use((req, res, next) => {
    console.log('Request received !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next;
});

app.use((req, res, next) => {
    res.json({ message: 'Your request was sucessful !' });
    next();
});

app.use((req, res, next) => {
    console.log('Response sent successfully !');
});

// export app as a module
module.export = app;
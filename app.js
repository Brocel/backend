const express = require('express'); // import express package

const app = express();

// app response, to see if everything is working
app.use((req, res) => {

    res.json({ message : 'Your request was sucessful !'});
});

// export app as a module
module.export = app;
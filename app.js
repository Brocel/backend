const express = require('express'); // import express package
const bodyParser = require('body-parser'); // import body parser
const mongoose = require('mongoose'); // import mongoose
// Models
const Thing = require('./models/thing');
// Express App
const app = express();

// MongoDB params
const uri = "";

mongoose.connect("")
    .then(() => {
    console.log('Successfully connected to MongoDB Atlas !');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas !');
        console.error(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

// Get all Route
app.use('/api/stuff', (req, res, next) => {
    Thing.find()
        .then(
            (things) => {
                res.status(200).json(things);
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
});

// Post route
app.post('/api/stuff', (req, res, next) => {
    const thing = new Thing({
        title: req.body.title, 
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    thing.save()
        .then(
            () => {
                res.status(201).json({
                    message: 'Post saved successfully !'
                });
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
});

// Get one by id route
app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({
        _id: req.params.id
    }).then(
        (thing) => {
            res.status(200).json(thing);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
});

// Update
app.put('/api/stuff/:id', (req, res, next) => {
    const thing = new Thing({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    });
    Thing.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

  // Delete
  app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

// export app as a module
module.exports = app;
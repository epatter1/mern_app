let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Client Model
let clientSchema = require('../models/Client');

// CREATE Client
router.route('/create-client').post((req, res, next) => {
  clientSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Clients
router.route('/').get((req, res) => {
  clientSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Client
router.route('/edit-client/:id').get((req, res) => {
  clientSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Client
router.route('/update-client/:id').put((req, res, next) => {
  clientSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Client updated successfully !')
    }
  })
})

// Delete Client
router.route('/delete-client/:id').delete((req, res, next) => {
  clientSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
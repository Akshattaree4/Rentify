const express = require('express');
const { addProperty, getProperties, updateProperty, deleteProperty } = require('../controllers/propertyController');

const router = express.Router();

router.route('/')
  .post(addProperty)
  .get(getProperties);

router.route('/:id')
  .put(updateProperty)
  .delete(deleteProperty);

module.exports = router;

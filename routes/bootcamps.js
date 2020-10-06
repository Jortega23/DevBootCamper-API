const express = require('express')
const {getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps')

const router = express.Router()


//Set up routes that DONT NEED a :id
router.route('/').get(getBootcamps).post(createBootcamp);

//Set up routes that DO NEED a :id
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)


module.exports = router;
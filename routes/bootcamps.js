const express = require('express')
const router = express.Router()


//Creating Routes----------------------------------------------------------------->
// GET all bootcamps
router.get('/', (req,res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
})

// GET a single bootcamp
router.get('/:id', (req,res) => {
  res.status(200).json({ success: true, msg: 'show a specific bootcamp' });
})

// POST bootcamp
router.post('/', (req,res) => {
  res.status(200).json({ success: true, msg: 'Create New Bootcamp' });
})

// PUT (update) a bootcamp
router.put('/:id', (req,res) => {
  res.status(200).json({ success: true, msg: 'Update a bootcamp' });
})

// DELETE a bootcamp
router.delete(':id', (req,res) => {
  res.status(200).json({ success: true, msg: 'Delete a bootcamp' });
})
// ------------------------------------------------------------------------------>

module.exports = router;
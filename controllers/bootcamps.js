// create different methods that are associated with certain routes
// must export each method 
// Each moduel takes res, req, and next




// @desc - GET all Bootcamps
// @route - GET /api/v1/bootcamps
// @access - Public
exports.getBootcamps = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc - GET a single Bootcamps
// @route - GET /api/v1/bootcamps/:id
// @access - Public
exports.getBootcamp = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'show a specific bootcamp' });
}

// @desc - Create a new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'Create New Bootcamp' });
}

// @desc - UPDATE a Bootcamps
// @route - PUT /api/v1/bootcamps/:id
// @access - Private
exports.updateBootcamp = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'Update a bootcamp' });
}

// @desc - DELETE a Bootcamps
// @route - DELETE /api/v1/bootcamps/:id
// @access - Private
exports.deleteBootcamp = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'Delete a bootcamp' });
}

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
exports.getBootcamps = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc - Create a new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.getBootcamps = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc - UPDATE a Bootcamps
// @route - PUT /api/v1/bootcamps/:id
// @access - Private
exports.getBootcamps = (req,res,next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}


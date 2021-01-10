
const { body, validationResult, buildCheckFunction } = require('express-validator');

const   validateCustomersBody = () => {
    return [
      body('fullName')
      .exists()
      .withMessage('fullName is required')
      .isLength({min:3})
      .withMessage('name must be greater than 3 letters'),
      body('email').exists()
      .withMessage('email is required...!')
      .isEmail()
      .withMessage('Email is invalid'),
      body('phone').optional().isInt(),
      body('address')
      .exists()
      .withMessage('address is required...!')

    ]
  }

  
  const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }

 
  
  

module.exports = {
    validateCustomersBody,
     validate
}
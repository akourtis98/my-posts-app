const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }
    if(validator.isLength(data.password, {min: 6, max: 120})){
        errors.password = 'Password must be atleast 6 characters and max 30';
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    };
}
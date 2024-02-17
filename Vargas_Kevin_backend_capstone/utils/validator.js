const validateRegisterInput = (data) => {
    let errors = {};
  
    // Check if the name is not empty
    if (!data.name || data.name.trim().length === 0) {
      errors.name = 'Name field is required.';
    }
  
    // Check if the email is not empty and is a valid email address
    if (!data.email || data.email.trim().length === 0) {
      errors.email = 'Email field is required.';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      errors.email = 'Email is invalid.';
    }
  
    // Check if the password is not empty and is at least 6 characters
    if (!data.password || data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };
  
  module.exports = {
    validateRegisterInput,
  };
  
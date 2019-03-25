const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.login) ? data.login : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.login)) {
    errors.login = 'Benutzername oder E-Mail ist ein Pflichtfeld';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Passwort ist ein Pflichtfeld';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

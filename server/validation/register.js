const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateRegisterInput(data) {
  let errors = {}

  data.username = !isEmpty(data.username) ? data.username : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.password2 = !isEmpty(data.password2) ? data.password2 : ''

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'Benutzername muss zwischen 2 und 30 Zeichen lang sein'
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Benutzername ist ein Pflichtfeld'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'E-Mail ist ein Pflichtfeld'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Keine gültige E-Mail Adresse'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Passwort ist ein Pflichtfeld'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Passwort muss zwischen 6 und 30 Zeichen lang sein'
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Bitte gebe dein Passwort erneut ein'
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwörter stimmen nicht überein'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

const User = require('../../models/User')

const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)
  console.log(res, req)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Es gibt bereits einen Benutzer mit dieser E-Mail Adresse'
      return res.status(400).json(errors)
    } else {
      User.findOne({ username: req.body.username }).then(user => {
        if (user) {
          errors.username = 'Dieser Benutzername ist bereits vergeben'
          return res.status(400).json(errors)
        } else {
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          })

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err
              newUser.password = hash
              newUser
                .save()
                .then(user => {
                  const payload = {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    isVerified: user.isVerified,
                  }

                  jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 43200 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: 'Bearer ' + token,
                      })
                    }
                  )
                })
                .catch(err => console.log(err))
            })
          })
        }
      })
    }
  })
})

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.login
  const username = req.body.login
  const password = req.body.password

  User.findOne({
    $or: [{ email }, { username }],
  }).then(user => {
    if (!user) {
      errors.login = 'Benutzer nicht gefunden'
      return res.status(404).json(errors)
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email,
          username: user.username,
          isVerified: user.isVerified,
        }

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 43200 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
              username: user.username,
            })
          }
        )
      } else {
        errors.password = 'Falsches Password'
        return res.status(400).json(errors)
      }
    })
  })
})

// @route   GET api/users/getPrivateMessage
// @desc    First private route
// @access  Private
router.get(
  '/getPrivateMessage',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      message:
        'This is a protected message from server. You can only see this message when you are logged in!',
    })
  }
)

module.exports = router

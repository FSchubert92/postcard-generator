const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')
const users = require('./routes/api/users')

const db = require('./config/keys').mongoURI

mongoose.connect('mongodb://localhost:27017/postcards', {
  useNewUrlParser: true,
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./config/passport')(passport)
app.use('/api/users', users)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.use('/cards', require('./routes/cards'))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Server ready on port ' + port)
})

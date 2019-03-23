const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')
const users = require('./routes/api/users')
const app = express()
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI
const port = process.env.PORT || 4000

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected')
    app.listen(port, () => console.log(`Server running on port ${port}`))
  })
  .catch(err => console.log(err))

app.use(cors())

app.use(express.json())

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

// app.listen(port, () => {
//   console.log('Server ready on port ' + port)
// })

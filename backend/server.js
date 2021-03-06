let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let dbConfig = require('./database/db');

// Express Route
const clientRoute = require('../backend/routes/client.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/clients', clientRoute)


// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// // 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

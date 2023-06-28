const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info:'Node.js, Express, and Postgres API' });
});


app.post('/sign_up', db.createSignUp);
app.get('/sign_up/:id', db.getSignupById);
app.get('/sign_up', db.getSignup);
app.post('/login_verify', db.createLoginVerify);
app.get('/login_verify', db.getloginverify);
app.post('/operator_records', db.createOperDetails);
app.get('/operator_records', db.getOperatorDetails);
app.get('/operator_records/:id', db.getOperatorDetailsByID);




// app.post('/sign_up',db.getlogin);
// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser);

app.listen(port,() => {
  console.log(`App running on port ${port}.`);
});

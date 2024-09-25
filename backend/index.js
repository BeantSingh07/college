// Import Express
const express = require('express');
const userRouter = require('./routes/user');
const studentRouter = require('./routes/student');
const feeRouter = require('./routes/fee');
const cors = require('cors');

// Create an Express application
const app = express();
app.use(express.json());
app.use(cors())

app.use('/user', userRouter);
app.use('/student', studentRouter);
app.use('/fee', feeRouter);

// Start the server
app.listen(3000);

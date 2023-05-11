const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

const userRoute = require('./routes/api.js')
app.use("/user", userRoute)

app.listen(port, () => {
    console.log(`api app listening at http://localhost:${port}`);
});

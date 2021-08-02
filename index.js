const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// console.log("mongodb+srv://uditjain123:uditjain123@sampledatabase.r6mtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", typeof uri);
mongoose.connect("mongodb+srv://uditjain123:uditjain123@sampledatabase.r6mtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const DataRouter = require('./Routes/bmi-data');

app.use('/weight', DataRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
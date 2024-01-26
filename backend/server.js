const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/connect");
const articleRouter = require('./routes/articlesRouter');
const subscriberRouter = require('./routes/subscribersRouter');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

connectToDB();

app.use('/article', articleRouter);
app.use('/subscriber', subscriberRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}....`);
})
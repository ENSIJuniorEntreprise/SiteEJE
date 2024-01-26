const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/connect");
const articleRouter = require('./routes/articlesRouter');
const subscriberRouter = require('./routes/subscribersRouter');
const { sendEmailToSubscribers } = require('./controllers/subscriberController');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

connectToDB();

app.use('/article', articleRouter);
app.use('/subscriber', subscriberRouter);

app.post('/send-emails', sendEmailToSubscribers);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}....`);
})
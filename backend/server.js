const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/connect");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const articleRouter = require('./routes/articlesRouter');
const subscriberRouter = require('./routes/subscribersRouter');
const authRouter = require('./routes/authRouter');
const refreshRouter = require('./routes/refreshRouter');
const { sendEmailToSubscribers } = require('./controllers/subscriberController');
const app = express();

dotenv.config();

app.use(credentials)
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' })); // Adjust the limit to your needs
app.use(cookieParser());

connectToDB();

app.use('/article', articleRouter);
app.use('/subscriber', subscriberRouter);
app.use('/auth', authRouter);
app.use('/refresh', refreshRouter);

app.post('/send-emails', sendEmailToSubscribers);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}....`);
})
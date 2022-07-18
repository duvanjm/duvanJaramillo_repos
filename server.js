const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('DB connection successful!'))
.catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

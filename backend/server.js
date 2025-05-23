const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes');
const insertDemoPosts = require('./utils/insertDemoPosts');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static('public/images'));
app.use('/api/blogs', blogRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(async () => {
  console.log("MongoDB connected");
  await insertDemoPosts();
}).catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

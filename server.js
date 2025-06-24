const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const paymentRoutes = require('./routes/payment');
const auth = require('./middleware/auth');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();


app.get('/test', (req, res) => {
    console.log('Test route hit');
    res.json({ message: 'Server is working' });
  });

// Add a test endpoint to check if the authentication middleware is working
app.get('/test/protected',auth, (req, res) => {
    console.log('Protected test route hit');
    res.json({ message: 'This route is protected', userId: req.userId });
});
  
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/payment', paymentRoutes);

const port = process.env.PORT || 5100;
app.listen(port, () => console.log(`Server running on port ${port}`));

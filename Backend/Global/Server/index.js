// server/index.js
const express = require('express');
// const dotenv = require('dotenv');
const connectDB = require('../Config/db');



////////
const dotenv = require('dotenv');
dotenv.config();

////////////
const path = require('path');


// تحميل متغيرات البيئة من ملف .env
dotenv.config();

// الاتصال بقاعدة البيانات
connectDB();

// إنشاء تطبيق Express
const app = express();

// إعداد Middleware لتحليل البيانات في JSON
app.use(express.json());

// إعداد المسارات (Routes)
const userRoutes = require('../Routes/user.Routes');
app.use('/api/users', userRoutes);
/////// m
app.get('/login', (req, res) => {
  // res.sendFile(path.join(__dirname, 'Pages', 'Logine.jsx'));
  // res.sendFile '../../../Frontend/components/pages/LogIne.jsx'
  res.sendFile(path.join(__dirname, '../../../Frontend/components/pages/LogIne.jsx'));
});

// بدء الخادم
// const PORT = process.env.PORT || 5000;
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
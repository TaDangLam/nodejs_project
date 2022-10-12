const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

// trên URL cái PATH kiểu localhost:3000/news/.... thì chạy dòng dưới còn chỉ localhost:3000/news thì chạy dòng cuối cùng có mỗi dấu /
router.get('/show', newsController.showNew);
router.get('/', newsController.indexNew); // tuyến đường gạch chéo luôn nằm ở dưới cùng

module.exports = router;

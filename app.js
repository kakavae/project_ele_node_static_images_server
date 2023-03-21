const express = require('express')
const cors = require('cors')

const app = express()
// 解决跨域
app.use(cors())

// 1. 托管图片文件夹的静态资源 托管imagesSwiper文件夹，也就是home页的轮播图
// http://127.0.0.1:8091/imagesSwiper/banner1.jpg就可以拿到banner1.jpg
app.use('/imagesSwiper', express.static('imagesSwiper'))
// 2. 托管home中floor组件的轮播图背景图片
// http://127.0.0.1:8091/floorSwiper/floor-1-b01.png
app.use('/floorSwiper', express.static('floorSwiper'))
// 3. 托管floor中的非轮播图图片
// http://127.0.0.1:8091/floorImages/floor-1-1.png
app.use('/floorImages', express.static('floorImages'))
// 4. 托管search中的搜索结果初始页面图片
// http://127.0.0.1:8091/searchImages/honer.jpg
app.use('/searchImages', express.static('searchImages'))
// 5. 托管商品详情页的相关图片
// http://127.0.0.1:8091/detailImages/s1.png
app.use('/detailImages', express.static('detailImages'))

app.listen('8091', () => {
  console.log('visit server at http://127.0.0.1:8091')
})

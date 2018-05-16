//index.js
//获取应用实例
const app = getApp()

import { q } from '../../config/q'
import { getHomeInfo } from '../../config/api'

Page({
  data: {
    // swiper
    indicatorDots: true,  // 是否显示dots
    autoplay: true,  // 自动播放
    interval: 4000,  // 自动播放间隔 
    duration: 1000,  // 滚动动画持续时间 
    circular: true,  // 是否采用衔接滚动
    indicatorColor: 'rgba(255, 255, 255, 0.3)',  // dot color
    indicatorActiveColor: '#FFF',   // dot active color
    swiperItems: [],
    companyBanner: '../../static/imgs/index/company.jpg',
    // 搜索
    searchIcon: '../../static/imgs/index/search.png',
    longLineIcon: '../../static/imgs/index/longLine.png',
    middleLineIcon: '../../static/imgs/index/middleLine.png',
    shortLineIcon: '../../static/imgs/index/shortLine.png',
    recommendBest: {},
    recommendCommon: [],
  },
  onLoad: function () {
    this.initData();
  },
  initData() {
    q({
      url: getHomeInfo,
    }).then(res => {
      // 轮播图， 优惠券， 推荐线路
      let {carousel, voucher,  tourline } = res.data.data;
      let swiperItems = carousel && carousel.map(v => {
        return {
          url: v.url,
          img: `${app.globalData.imageBase}${v.code.substring(1)}`,
        }
      });
      let recommendCommon = [];
      let recommendBest = [];
      tourline && tourline.map((v, i) => {
        if(i == 0) {
          recommendBest = {
            id: v.id,
            name: v.name,
            banner: `${app.globalData.imageBase}${v.image.substring(1)}`,
            intro: v.brief,
            saled: v.sale,
            price: v.price,
            city: v.city,
          }
        }else {
          recommendCommon.push({
            id: v.id,
            name: v.name,
            banner: `${app.globalData.imageBase}${v.image.substring(1)}`,
            intro: v.brief,
            saled: v.sale,
            price: v.price,
            city: v.city,
          })
        }
      })
      this.setData({
        swiperItems,
        recommendCommon,
        recommendBest,
      })
    })
  },
  goDetail(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
  }
})

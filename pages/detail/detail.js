// pages/detail/detail.js

//获取应用实例
const app = getApp()

var WxParse = require('../../static/libs/wxParse/wxParse.js')

import { q } from '../../config/q'
import { getTourlineDetail } from '../../config/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    base: {},
    wechatIcon: '../../static/imgs/detail/contact.png',
    cartIcon: '../../static/imgs/detail/cart.png',
    requestEnd: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.initData(id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  // initData
  initData: function(id) {
    q({
      url: getTourlineDetail(id),
    }).then(res => {
      let detail = res.data && res.data.data;
      // let { }
      let { id, name, image, brief, sale, price,
            city_id, tourTotalDay,city_name,
            tourDesc, appointDesc } = detail.tourline;
      this.setData({
        base: {
          id,
          name,
          image: `${app.globalData.imageBase}${image.substring(1)}`,
          brief,   // 推荐理由
          sale,
          price,
          city_id,
          tourTotalDay,
          city_name,
        },
      })
      // 行程安排
      WxParse.wxParse('xc', 'html', tourDesc, this, 5);
      WxParse.wxParse('yd', 'html', appointDesc, this, 5);
      this.setData({
        requestEnd: true,
      })
    })
  }
})
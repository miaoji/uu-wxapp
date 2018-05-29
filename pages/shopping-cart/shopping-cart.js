// pages/shopping-cart/shopping-cart.js

const app = getApp()

import { q } from '../../config/q'
import { getShoppintCart } from '../../config/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // filterItem: ['国内中长线', '国内短线', '爆款尾单'],
    // selectedItem: 0,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
    this.initShoppingCart();
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

  // 顶部筛选
  chooseFilter: function(e) {
    var index = e.currentTarget.dataset.idx;
    this.setData({
      selectedItem: index
    })
  },

  initShoppingCart() {
    q({
      url: getShoppintCart
    }).then(res => {
      let result = res.data.data.tourline.rows;
      if(result.length) {
        let list = result.map(v => {
          return {
            id: v.id,
            name: v.name,
            saled: v.sale,
            price: v.price,
            advance: v.advanceDay,
          }
        })
        this.setData({
          list: list
        })
      }else {

      }
    })
  }
})
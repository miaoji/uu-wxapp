// pages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupons: [
      {
        amount: 1000,
        expiry: '2018.09.01',
        status: 1
      },
      {
        amount: 2000,
        expiry: '2018.09.01',
        state: 2
      },
      {
        amount: 1000,
        expiry: '2018.09.01',
        state: 3
      }
    ],
    activeCouponBg: '../../static/imgs/coupon/active-coupon.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})
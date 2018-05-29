// pages/mycenter/mycenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editImg: '../../static/imgs/index/demo6.png',
    orderIcon: '../../static/imgs/center/icon1.png',
    historyIcon: '../../static/imgs/center/icon2.png',
    couponIcon: '../../static/imgs/center/icon3.png',
    arrowIcon: '../../static/imgs/center/icon-arrow.png',
    order: {
      date: '2018-05-23 周六',
      image: '../../static/imgs/orderlist/demo.png',
      name: '上海浦东软件园20日游园20日园20日',
      startDate: '05/20',
      adult: 2,
      child: 1,
      orderNo: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心',
    })
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

  handleCouponList() {
    wx.navigateTo({
      url: '/pages/coupon/coupon'
    })
  },

  handleOrderList() {
    wx.navigateTo({
      url: '/pages/orderlist/orderlist'
    })
  },

  handleNopayList() {
    wx.navigateTo({
      url: '/pages/notusedorder/notusedorder'
    })
  },

  viewDetail(e) {
    var id = e.currentTarget.dataset.orderno;
    wx.navigateTo({
      url: `/pages/ordersuccess/ordersuccess?id=${id}`
    })
  }

})
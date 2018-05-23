// pages/ordersuccess/ordersuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {
      oNumber: '174894040',  // 订单编号 
      time: '2018-05-18', // 预定时间 
      tourline: '溧阳南山、天目湖、假日花园大酒店（豪华房）2晚3日',   // 行程名字
      startTime: '05/28',  // 出发时间 
      endTime: '06/01', // 返程时间 
      adultCount: '2',  // 大人个数
      childCount: '1', // 儿童个数
      totalMoney: 1990, // 实付金额 
      tNumber: '3338888' // 线路编号
    },
    contacter: {
      name: '张浩',
      phone: '18601714102',
      email: 'arronf2e@163.com',
      address: '上海杨浦区创智天地',
    },
    travellers: [
      {
        name: '张浩1',
        phone: '18601714102',
        idcard: '320788373736663652',
      },
      {
        name: '张浩2',
        phone: '18601714102',
        idcard: '320788373736663652',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderDetail();
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

  getOrderDetail() {

  }
})
// pages/notusedorder/notusedorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        date: '05-23',
        image: '../../static/imgs/orderlist/demo.png',
        name: '上海浦东软件园20日游园20日园20日',
        startDate: '05/20',
        endDate: '05/28',
        orderNo: '',
        adult: '1',
        child: '2'
      },
      {
        date: '05-23',
        image: '../../static/imgs/orderlist/demo.png',
        name: '上海浦东软件园20日游园20日园20日',
        startDate: '05/20',
        endDate: '05/28',
        orderNo: '',
        adult: '1',
        child: '2'
      },
    ],
    nopaylist: [
      {
        date: '05-23',
        name: '上海浦东软件园20日游园20日园20日',
        startDate: '05/20',
        endDate: '05/28',
        orderNo: '',
        price: '1900'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '未出行订单',
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
  
  }
})
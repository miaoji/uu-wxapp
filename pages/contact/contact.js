// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    wechatIcon: '../../static/imgs/contact/wechat.png',
    phoneIcon: '../../static/imgs/contact/phone.png',
    phoneNumber: '123456789123'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '客服',
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

  calling: function() {
    var _this = this;
    wx.showModal({
      title: '提示',
      content: `确定呼叫：${_this.data.phoneNumber}`,
      success: function (res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: _this.data.phoneNumber
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
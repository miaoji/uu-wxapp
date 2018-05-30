// pages/makeorder/makeorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechatIcon: '../../static/imgs/detail/contact.png',
    contact: {
      name: '',
      phone: '',
      email: '',
      address: '',
    },
    persons: [
      {
        name: '',
        idcard: '',
        phone: '',
      },
      {
        name: '',
        idcard: '',
        phone: '',
      }
    ],
    nameIcon: '../../static/imgs/makeorder/name.png',
    phoneIcon: '../../static/imgs/makeorder/phone.png',
    emailIcon: '../../static/imgs/makeorder/name.png',
    addressIcon: '../../static/imgs/makeorder/location.png',
    idcardIcon: '../../static/imgs/makeorder/idcard.png',
    couponIcon: '../../static/imgs/makeorder/coupon.png',
    arrowIcon: '../../static/imgs/center/icon-arrow.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '提交订单',
      success: (res) => {
        
      },
      fail: (res) => {
        
      },
      complete: (res) => {
        
      }
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

  handleCnameInput(e) {
    this.setData({
      'contact.name': e.detail.value
    })
  },
  handleCphoneInput(e) {
    this.setData({
      'contact.phone': e.detail.value
    })
  },
  handleCemailInput(e) {
    this.setData({
      'contact.email': e.detail.value
    })
  },
  handleCaddressInput(e) {
    this.setData({
      'contact.address': e.detail.value
    })
  },
  handlePnameInput(e) {
    var index = e.currentTarget.dataset.index;
    var value = e.detail.value;
    var persons = this.data.persons;
    persons[index].name = value;
    this.setData({
      persons: persons
    })
  },
  handlePidcardInput(e) {
    var index = e.currentTarget.dataset.index;
    var value = e.detail.value;
    var persons = this.data.persons;
    persons[index].idcard = value;
    this.setData({
      persons: persons
    })
  },
  handlePphoneInput(e) {
    var index = e.currentTarget.dataset.index;
    var value = e.detail.value;
    var persons = this.data.persons;
    persons[index].phone = value;
    this.setData({
      persons: persons
    })
  }
})
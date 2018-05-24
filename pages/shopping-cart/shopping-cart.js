// pages/shopping-cart/shopping-cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // filterItem: ['国内中长线', '国内短线', '爆款尾单'],
    // selectedItem: 0,
    list: [
      {
        banner: '../../static/imgs/index/demo1.png',
        name: '重庆/西安/北京/上海重庆/西安/北京/上海',
        advance: '建议提前5天以上',
        saled: '1888',
        price: '5760',
      },
      {
        banner: '../../static/imgs/index/demo3.png',
        name: '启东/吕四/',
        advance: '建议提前3天以上',
        saled: '2000',
        price: '2000',
      }
    ]
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
  
  },

  // 顶部筛选
  chooseFilter: function(e) {
    var index = e.currentTarget.dataset.idx;
    this.setData({
      selectedItem: index
    })
  }
})
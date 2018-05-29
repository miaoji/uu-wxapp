// pages/search/search.js

//获取应用实例
const app = getApp()
import { q } from '../../config/q'
import { searchByKeyword } from '../../config/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchIcon: '../../static/imgs/index/search.png',
    keyword: '',
    searchResult: [],
    showList: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索',
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

  bindKeyInput(e) {
    this.setData({
      keyword: e.detail.value
    })
  },

  handleSearch() {
    console.log(this.data.keyword);
    q({
      url: searchByKeyword(this.data.keyword),
    }).then(res => {
      let result = res.data.data;
      console.log(res);
      if(result.length) {
        let searchResult = result.map(v => {
          return {
            id: v.id,
            name: v.name,
            banner: `${app.globalData.imageBase}${v.image.substring(1)}`,
            intro: v.brief,
            saled: v.sale,
            price: v.price,
          }
        })
        this.setData({
          searchResult: searchResult
        })
      }else {
        this.setData({
          searchResult: []
        })
      }
      this.setData({
        showList: true
      })
    })
  }
})
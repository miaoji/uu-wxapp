// pages/submitorder/submitorder.js

const app = getApp()

import { q } from '../../config/q'
import { payOrder } from '../../config/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ],
    wechatIcon: '../../static/imgs/detail/contact.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '确认订单',
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

  handleOrder() {
    q({
      url: payOrder,
      method: 'post',
      data: {
        orderId: '',
        voucherId: '',
      }
    }).then(res => {
      console.log(res, 'res');
    })
  }
})
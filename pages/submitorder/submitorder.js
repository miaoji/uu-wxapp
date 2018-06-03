// pages/submitorder/submitorder.js

const app = getApp()

import { q } from '../../config/q'
import { orderDetail, payOrder } from '../../config/api'

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
    orderId: '',
    tourline_name: '',
    adult_count: '',
    child_count: '',
    orderId: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var contacter = JSON.parse(options.contacter);
    var travellers = JSON.parse(options.travellers);

    var orderId = options.orderId;


    this.setData({
      orderId
    })

    this.initOrderInfo(contacter, travellers);

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
    this.getOrderDetail();
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

  initOrderInfo(contacter, travellers) {
    this.setData({
      contacter: contacter,
      travellers: travellers,
    })
  },

  getOrderDetail() {
    var personItem = this.data.personItem;
    var newPersons = [];
    q({
      url: orderDetail(this.data.orderId),
      header: {
        authorization: app.globalData.token,
      },
    }).then(res => {
      let { order } = res.data.data;
      let { adult_count, child_count, tourline_name, start_time, tour_total_day } = order;
      newPersons = new Array(adult_count + child_count).fill(personItem);
      this.setData({
        adult_count,
        child_count,
        tourline_name,
        tour_total_day,
        persons: newPersons,
      })
    })
  },

  handleOrder() {
    q({
      url: payOrder,
      method: 'post',
      header: {
        authorization: app.globalData.token,
      },
      data: {
        orderId: this.data.orderId,
        voucherId: '',
      }
    }).then(res => {
      this.handlePay(res.data.data);
    })
  },

  handlePay(res) {
    let {timeStamp, nonceStr, paySign} = res;
    let packageCode = res.package;
    console.log(timeStamp, nonceStr, paySign, packageCode, 'test');
    wx.requestPayment({
     timeStamp,
     nonceStr,
     package: packageCode,
     signType: 'MD5',
     paySign,
     success: (res) => {
        wx.navigateTo({
          url: `/pages/paysuccess/paysuccess?orderId=${this.data.orderId}`,
        })
     },
     fail: (res) => {
        console.log(res, 'failed res');
        wx.navigateTo({
          url: `/pages/payfailed/payfailed?orderId=${this.data.orderId}`,
        })
     }
  })
  }
})
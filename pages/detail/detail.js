// pages/detail/detail.js

//获取应用实例
const app = getApp()

var WxParse = require('../../static/libs/wxParse/wxParse.js')

import { q } from '../../config/q'
import { getTourlineDetail, getTourlineDetailItem } from '../../config/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    base: {},
    wechatIcon: '../../static/imgs/detail/contact.png',
    cartIcon: '../../static/imgs/detail/cart.png',
    requestEnd: false,
    tourlineItem: [],
    clientHeight: 0,
    chooseLine: false,
    id: '',
    activeline: 0,
    selectlineId: '',
    adultCount: 1,
    childCount: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      id: id,
    })
    this.initData(id);
    this.getSystemInfo();
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

  // initData
  initData: function(id) {
    q({
      url: getTourlineDetail(id),
    }).then(res => {
      let detail = res.data && res.data.data;
      // let { }
      let { id, name, image, brief, sale, price,
            city_id, tourTotalDay,city_name,
            tourDesc, appointDesc } = detail.tourline;
      wx.setNavigationBarTitle({
        title: name,
      })
      this.setData({
        base: {
          id,
          name,
          image: `${app.globalData.imageBase}${image.substring(1)}`,
          brief,   // 推荐理由
          sale,
          price,
          city_id,
          tourTotalDay,
          city_name,
        },
      })
      // 行程安排
      tourDesc = tourDesc.replace(/\.\/public\//g, `${app.globalData.imageBase}/public/`);
      appointDesc = appointDesc.replace(/\.\/public\//g, `${app.globalData.imageBase}/public/`);
      // tourDesc = tourDesc.replace('./public/', `${app.globalData.imageBase}/public/`);
      // appointDesc = appointDesc.replace('./public/', `${app.globalData.imageBase}/public/`);
      console.log(appointDesc);
      WxParse.wxParse('xc', 'html', tourDesc, this, 5);
      WxParse.wxParse('yd', 'html', appointDesc, this, 5);
      this.setData({
        requestEnd: true,
      })
    })
  },
  getTourlineDetailItem() {

  },
  getSystemInfo() {
    wx.getSystemInfo({
      success: (res) => {
        let brand = res.brand  // 手机品牌
        let model = res.model  // 手机型号
        let pixelRatio = res.pixelRatio  // 设备像素比
        let screenWidth = res.screenWidth  // 屏幕宽度
        let screenHeight = res.screenHeight  // 屏幕高度
        let windowWidth = res.windowWidth  // 可使用窗口宽度
        let windowHeight = res.windowHeight  // 可使用窗口高度
        let language = res.language  // 微信设置的语言
        let version = res.version  // 微信版本号
        let system = res.system  // 操作系统版本
        let platform = res.platform  // 客户端平台
        this.setData({
          clientHeight: windowHeight + 'px'
        })
      },
      fail: (res) => {
        
      },
      complete: (res) => {
        
      }
    })
  },
  handleOrder() {
    q({
      url: getTourlineDetailItem(this.data.id)
    }).then(res => {
      console.log(res, 'res,hhahah');
      let result = res.data.data.tourlineItem;
      if(result.length) {
        let tourlineItem = [];
        tourlineItem = result.map(v => {
          let start_time = '';
          let vstart_time = v.start_time;
          let month = new Date(vstart_time).getMonth() + 1;
          let date = new Date(vstart_time).getDate();
          let day = new Date(vstart_time).getDay();
          var weekday=["周日","周一","周二","周三","周四","周五","周六"];
          if(month > 9) {
            start_time = `${month}-${date}（${weekday[day]}）`;
          }else {
            start_time = `0${month}-${date}（${weekday[day]}）`;
          }
          return Object.assign(v, {
            start_time: start_time,
          })
        })
        this.setData({
          tourlineItem: tourlineItem,
          selectlineId: tourlineItem[0].id,
        })
      }
      this.setData({
        chooseLine: true,
      })
    })
    
  },
  selectline(e) {
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    this.setData({
      activeline: index,
      selectlineId: id,
    })
  },
  hidecWrap() {
    this.setData({
      chooseLine: false,
    })
  },
  dropAdult() {
    let adultCount = this.data.adultCount;
    if(!adultCount) {
      return;
    }
    this.setData({
      adultCount: adultCount - 1
    })
  },
  addAdult() {
    let adultCount = this.data.adultCount;
    this.setData({
      adultCount: adultCount + 1
    })
  },
  bindAdultInput(e) {
    this.setData({
      adultCount: e.detail.value
    })
  },
  dropChild() {
    let childCount = this.data.childCount;
    if(!childCount) {
      return;
    }
    this.setData({
      childCount: childCount - 1
    })
  },
  addChild() {
    let childCount = this.data.childCount;
    this.setData({
      childCount: childCount + 1
    })
  },
  bindChildInput(e) {
    this.setData({
      childCount: e.detail.value
    })
  },
  handleWrapSubmit() {

  },
  catchBubble() {
    return false;
  }
})
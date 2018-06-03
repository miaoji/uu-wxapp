// pages/category/category.js
const app = getApp()

import { q } from '../../config/q'
import { getTourlines } from '../../config/api'

let animationShowHeight = 300; 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    range: 1,
    pageSize: 20,
    pageNo: 0,
    clientHeight: 'auto',
    overflow: 'auto',
    chooseTypeWrapper: false,
    types: [
      {
        name: '国内中长线',
        id: 1,
      },
      {
        name: '国内短线',
        id: 2,
      },
      {
        name: '爆款尾单',
        id: 3,
      }
    ],
    typename: '国内中长线',
    filterType: 1,
    filterTypes: [
      {
        sort: 0,
        order: 0,
        name: '默认排序'
      },
      {
        sort: 1,
        order: 2,
        name: '价格从低到高'
      },
      {
        sort: 1,
        order: 1,
        name: '价格从高到低'
      },
      {
        sort: 2,
        order: 1,
        name: '销量从高到低'
      },
      {
        sort: 2,
        order: 2,
        name: '销量从低到高'
      },
    ],
    filterTypeName: '默认排序',
    animationData: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类',
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
    var type = app.globalData.globalCategory;
    var typeId = 1,
        typename = '国内中长线';
    if(type == 'short') {
      typeId = 2;
      typename = '国内短线';
    }
    if(type == 'rest') {
      typeId = 2;
      typename = '爆款尾单';
    }
    this.setData({
      range: typeId,
      typename: typename,
    })
    this.getTourlines();
    this.goTop();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.hideFilterCoop();
    console.log('hide');
    this.setData({
      filterTypeName: '默认排序',
      filterType: 1,
      typename: '国内中长线',
      range: 1,
    })
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

  onReachBottom: function () {
    if(this.data.chooseTypeWrapper) {
      return;
    }
    this.setData({
      pageNo: this.data.pageNo + 1,
    })
    this.getTourlines();
  },
  
  // 1: 国内长线, 2: 国内中线,3: 周边短线  range
  getTourlines(reset, order, sort) {
    let ps = this.data.pageSize || 20,
        range = this.data.range || 1,
        pn = this.data.pageNo || 0;
    let url = '';
    if(reset) {
      this.setData({
        list: []
      })
    }
    q({
      url: getTourlines(range, ps, pn, order, sort)
    }).then(res => {
      let result = res.data.data.tourline.rows;
      if(result.length) {
        let array = result.map(v => {
          return {
            id: v.id,
            intro: v.brief,
            name: v.name,
            saled: v.sale,
            price: v.price / 100,
            banner: `${app.globalData.imageBase}${v.image.substring(1)}`,
          }
        })
        this.setData({
          list: [...this.data.list, ...array]
        })
      }
    })
  },

  setClientHeight() {
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
        let platform = res.platform  // 
        this.setData({
          clientHeight: (windowHeight - 60) + 'px',
          overflow: 'hidden'
        })
      },
      fail: (res) => {
        
      },
      complete: (res) => {
        
      }
    })
  },

  chooseType() {
    this.setClientHeight();
    this.showFilterCoop();
  },

  resetPageState() {
    this.setData({
      clientHeight: 'auto',
      overflow: 'auto',
    })
    this.hideFilterCoop();
  },

  handleChooseType(e) {
    var typeid = e.currentTarget.dataset.id,
        typename = e.currentTarget.dataset.name;
    this.setData({
      range: typeid,
      typename: typename,
      pageNo: 0,
    })
    this.resetPageState();
    this.getTourlines(true);
  },

  chooseOtherFilter() {
    this.setData({
      filterType: 2,
    })

    this.chooseType();
  },

  chooseTypeFilter() {
    this.setData({
      filterType: 1,
    })
    this.chooseType();
  },

  handleChooseFilterType(e) {
    var order = e.currentTarget.dataset.order,
        sort = e.currentTarget.dataset.sort,
        typename = e.currentTarget.dataset.name;
    this.setData({
      filterTypeName: typename,
      pageNo: 0,
    })
    this.resetPageState();
    this.getTourlines(true, order, sort);
  },

  goTop: function (e) {  // 筛选的时候回到顶部
   if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },


  showFilterCoop() {
    // var animation = wx.createAnimation({  
    //   duration: 200,  
    //   timingFunction: "ease",  
    //   delay: 0  
    // })  
    // this.animation = animation;  
    // animation.translateY(animationShowHeight).step()  
    // this.setData({  
    //   animationData: animation.export(),  
    // })  
    // setTimeout(function () {  
    //   animation.translateY(0).step()  
    //   this.setData({  
    //     animationData: animation.export(),  
    //     chooseTypeWrapper: true  
    //   })  
    // }.bind(this), 200) 

    this.setData({
      chooseTypeWrapper: true,
    }) 
  },

  hideFilterCoop() {
    this.setData({
      chooseTypeWrapper: false,
    }) 
  }

})
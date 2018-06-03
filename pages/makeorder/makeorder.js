// pages/makeorder/makeorder.js

const app = getApp()

import { q } from '../../config/q'
import { orderDetail, getVoucherList, addContacter, addTraveller} from '../../config/api'

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
      
    ],
    personItem: {
      name: '',
      idcard: '',
      phone: '',
      index2: 1,
    },
    nameIcon: '../../static/imgs/makeorder/name.png',
    phoneIcon: '../../static/imgs/makeorder/phone.png',
    emailIcon: '../../static/imgs/makeorder/name.png',
    addressIcon: '../../static/imgs/makeorder/location.png',
    idcardIcon: '../../static/imgs/makeorder/idcard.png',
    couponIcon: '../../static/imgs/makeorder/coupon.png',
    arrowIcon: '../../static/imgs/center/icon-arrow.png',
    orderId: '',
    price: 0,
    basePrice: 0,
    start_time: '',
    couponId: '',
    couponIdMoney: '',
    meno: '',
    couponName: '暂无优惠券',
    tourline_name: '',
    adult_count: '',
    child_count: '',
    idTypeArray: ['', '身份证', '护照', '军官证', '港澳通行证', '台胞证', '其他' ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 'options');
    wx.setNavigationBarTitle({
      title: '提交订单',
      success: (res) => {
        
      },
      fail: (res) => {
        
      },
      complete: (res) => {
        
      }
    })
    var { orderId, price, couponId, money } = options;
    this.setData({
      orderId: orderId,
      price: price,
      basePrice: price,
    })
    if(!couponId) {
      this.getVoucherList();
    }else {
      this.setData({
        couponId: couponId,
        couponIdMoney: money,
        couponName: `-${money}`,
        price: this.data.basePrice - parseInt(money),
      })
    }
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
  },

  handleRemarkInput(e) {
    this.setData({
      'meno': e.detail.value
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
        start_time: this.formateDate(start_time),
        persons: newPersons,
      })
    })
  },
  handleOrder() {
    // 联系人验证
    let {name, phone, email, address} = this.data.contact;
    let contactError = '';
    let travelError = '';
    let phoneReg = /^1[34578]\d{9}$/;
    let emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let idcardReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
    if(name == '') {
      contactError = '请输入真实联系人姓名';
    }else if(phone == '' || !phoneReg.test(phone)) {
      contactError = '请输入正确的联系人手机号';
    }else if(email == '' || !emailReg.test(email)) {
      contactError = '请输入正确的联系人邮箱';
    }else if(address == '') {
      contactError = '请输入具体的收货地址';
    }
    if(contactError) {
      wx.showToast({
        title: contactError,
        icon: 'none', // "success", "loading", "none"
        duration: 1500,
        mask: false,
      })
      return;
    }
    this.data.persons.some((index, v) => {
      console.log(index, v, 'some filter');
    })
    this.handleaddContacter();
  },

  // 添加联系人
  handleaddContacter() {
    var { contact } = this.data;
    var { name, phone: mobile, email, address} = contact;
    q({
      url: addContacter,
      method: 'post',
      header: {
        authorization: app.globalData.token,
      },
      data: {
        orderId: this.data.orderId,
        name, 
        mobile, 
        email, 
        address, 
        memo: this.data.meno || '',
      }
    }).then(res => {
      this.handleaddTraveller();
    })
  },
  // 添加出行人
  handleaddTraveller() {
    var travellers = this.data.persons.map(v => {
      return {
        name: v.name, 
        sn: v.idcard,
        mobile: v.phone,
        type: v.index2,
      }
    })
    q({
      url: addTraveller,
      method: 'post',
      header: {
        authorization: app.globalData.token,
      },
      data: {
        orderId: this.data.orderId,
        list: travellers,
      }
    }).then(res => {
       this.handleOrderSubmit();
    })
  },

  handleOrderSubmit() {
    var contacter = JSON.stringify(this.data.contact);
    var travellers = JSON.stringify(this.data.persons);
    try {
        wx.setStorageSync('contacter', contacter);
        wx.setStorageSync('travellers', travellers);
    } catch (e) {    
    }
    var { orderId, price, couponId} = this.data;
    wx.navigateTo({
      url: `/pages/submitorder/submitorder?orderId=${orderId}&couponId=${couponId}&price=${price}`,
    })
  },

  bindPickerChange(e) {
    var index = e.currentTarget.dataset.index;
    console.log(index, 'index');
    var value = e.detail.value;
    var persons = this.data.persons;
    console.log(e, 'picker发送选择改变，携带值为', e.detail.value, index)
    persons[index].index2 = parseInt(value);
    console.log(persons);
    this.setData({
      persons
    })
  },

  chooseCoupon() {
    wx.navigateTo({
      url: `/pages/coupon/coupon?orderId=${this.data.orderId}&price=${this.data.basePrice}`,
    })
  },

  getVoucherList() {
    q({
      url: getVoucherList,
      header: {
        authorization: app.globalData.token,
      }
    }).then(res => {
      let { limited_voucher, unlimited_voucher } = res.data.data;
      if(!limited_voucher.length && !unlimited_voucher.length) {
        this.setData({
          couponName: '暂无优惠券'
        })
      }else if(limited_voucher.length){
        this.setData({
          couponName: `-${limited_voucher[0].money / 100}`,
          price: this.data.basePrice - limited_voucher[0].money / 100,
          couponId: limited_voucher[0].id,
        })
      }else if(unlimited_voucher.length) {
        this.setData({
          couponName: `-${unlimited_voucher[0].money / 100}`,
          price: this.data.basePrice - unlimited_voucher[0].money / 100,
          couponId: unlimited_voucher[0].id,
        })
      }
    })
  },

  formateDate(time) {
    var string = time.split('T')[0];
    var day = new Date(time).getDay();
    var weekday=["周日","周一","周二","周三","周四","周五","周六"];
    string += ` ${weekday[day]}`;
    return string;
  }

})
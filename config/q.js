// 接口 Promise 化
const q = (option = {}) => {
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: option.url || '',
      method: option.method || 'get',
      data: option.data || {},
      header: option.header || {},
      success: function(data) {
        resolve(data)
        wx.hideLoading()
      },
      fail: function(err) {
        reject(err)
        wx.hideLoading();
      }
    })
  })
}

module.exports = {
  q: q
}
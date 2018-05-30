//app.js

App({
  onLaunch: function () {
    this.checkUpdate();
    wx.login({
      success: res => {
        if(res.code) {
          console.log(res.code);  // code在这里
        }
      }
    })
  },
  checkUpdate() {

    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })

    })

    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
    })
  },
  globalData: {
    userInfo: null,
    imageBase: 'http://i.uu-club.com',
    globalCategory: 'long',  // 为了解决 switchTab 无法传参的问题
  },
})
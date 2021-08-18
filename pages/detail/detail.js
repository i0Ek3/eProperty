var app = getApp()

Page({
  data: {
      name: 'test',
      id: '123',
      sex: 'male',
      phone: "13333333333",
      addr: 'Qingshan District, CHN',
      property: 'P-0123455AB',
      area: '200',
      expired: '2099-12-01',
      contract: 'enable',
      status: 'paid'
  },
  download: function(){
      // TODO: download data as pdf
      console.log(this.data);

      wx.showToast({
        title: 'Downloaded',
        icon: 'success',
        duration: 2000
      })
      console.log("Download successful!");
    },
    upload: function(){
      wx.showToast({
        title: 'Uploading...',
        icon: 'loading',
        duration: 2000
      })
    },
    update: function(){
      wx.navigateTo({
        url: '../update/update',
      })
    }
});
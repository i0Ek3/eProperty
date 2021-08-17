var app = getApp()

Page({
  data: {
      name: 'test',
      id: '123',
      addr: 'Qingshan District, CHN',
      property: 'P-0123455AB',
      expired: '2099-12-01',
      status: 'valid'
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
    }
});
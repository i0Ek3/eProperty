var app = getApp()

Page({
  data: {
    name: 'zhang',
    id: '123123123123',
    addr: 'Qingshan District, CHN',
    property: 'P-0123455AB',
    expired: '2099-12-01',
    status: 'valid'
  },
  onClick: function (e){
    this.setData({

    })
  }, download: function(){
      // TODO: download data as pdf
      console.log("Download successful!")
    }
});
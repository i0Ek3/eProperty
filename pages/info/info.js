var app = getApp()

Page({
    data: {
        id: '',
        name: ''
    },
    id: function(e){
        var that = this;
        var val1 = e.detail.value;
        that.setData({
            val1: val1
        })
    }, name: function(e){
        var that = this;
        var val2 = e.detail.value;
        that.setData({
            val2: val2
        })
    }, confirm: function(){
        // TODO: validate data
        wx.navigateTo({
            url: '../detail/detail',
        })
    }, reset: function(){
        console.log(wx.clearStorage({
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        }))
    }
});

var app = getApp()

Page({
    data: {
        userInfo: {}
    },
    bindViewTap: function() {
        this.getLocation()
    },
    getLocation: function() {
        var that = this
    },
    onLoad: function() {
        console.log('onLoad')
        app.getUserInfo((userInfo) => {
            this.setData({
                userInfo: userInfo
            })
        })
    }
});

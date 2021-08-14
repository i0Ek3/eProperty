var app = getApp()

Page({
    data: {
        userInfo: {}
    },
    onLoad: function() {
        console.log('onLoad')
        app.getUserInfo((userInfo) => {
            this.setData({
                userInfo: userInfo
            })
        })
    },
    onClick: function (){
        this.setData({
            ctx: 'input sth'
        })
    }
});

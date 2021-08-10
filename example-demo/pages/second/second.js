Page({
    onLoad: function(option) {
        console.log(option.id)
        console.log(option.other)
    },
    onShareAppMessage: function() {
        return {
            title: 'ShareMe',
            path: '/'
        }
    },
    buttonHandler(event) {
        wx.navigateTo({
            url: '../me/me?id=3&other=def'
        });
    }
});

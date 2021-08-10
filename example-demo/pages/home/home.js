Page({
    onLoad: function(option) {
        console.log(option.id)
        console.log(option.other)
    },
    buttonHandler(event) {
        wx.navigateTo({
            url: '../second/second?id=2&other=cde'
        });
    }
});

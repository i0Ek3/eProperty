const app = getApp();

Page({
    data: {
        name: "demo",
        items: [],
        inputValue: '',
        now: app.globalData.now
    },
    inputHandler(event) {
        this.setData({
            inputValue: event.detail.value || ''
        });
    },
    buttonHandler(event) {
        const that = this;
        wx.showModal({
            title: 'Comfirmation',
            content: 'Are you sure you want to change the message?',
            success (res) {
                if (res.confirm) {
                    that.setData({
                        name: 'example-demo'
                    }, function () {
                        wx.showToast({
                            title: 'Finished',
                            duration: 700
                        });
                    });
                } else if (res.cancel) {
                    console.log('Cancelled by user opertion');
                }
            }
        });

        if (!event.detail.userInfo) return;
        this.setData({
            name: event.detail.userInfo.nickName
        });

        const newItem = this.data.inputValue.trim();
        if (!newItem) return;
        const iterArr = [...this.data.items, newItem];
        wx.setStorageSync('items', itemArr);
        this.setData({ items: itemArr });
    },
    onLoad() {
        const itemArr = wx.getStorageSync('items') || [];
        this.setData({ items: itemArr });
    }
});

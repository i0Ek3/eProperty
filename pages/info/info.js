var app = getApp()

Page({
    data: {

    },
    onLoad: function() {
        this.setData({
            id: app.globalData.id,
            name: app.globalData.name,
            sex: app.globalData.sex,
            phone: app.globalData.phone,
            addr: app.globalData.addr,
            property: app.globalData.property,
            area: app.globalData.area,
            expired: app.globalData.expired,
            contract: app.globalData.contract,
            status: app.globalData.status
        })
    },
    confirm: function() {      
        // TODO: validate number and string
        if (this.data.id && this.data.name) {
            wx.showToast({
                title: 'Auth Successed',
                icon: 'success',
                duration: 2000
            })
            setTimeout(function() {
                wx.navigateTo({
                    url: '../detail/detail',
                })
            }, 1500)
        } else {
            wx.showToast({
                title: 'Auth Failed',
                icon: 'error',
                duration: 2000
            })
        }
    }, 
    reset: function() {
        this.setData({
            'id': '',
            'name': ''
        })
    },
    // TODO: generate data randomly
    fakeit: function() {
        // var faker = require('faker');
        wx.showToast({
            title: 'Generating...',
            icon: 'loading',
            duration: 2000
        })
    }
});

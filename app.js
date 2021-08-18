App({
  onLaunch(options) {
    //
  },
  onShow(options) {
    //
  },
  onLoad() {
    console.log(this.globalData.name);
    console.log(this.globalData.id);
  },
  onHide() {
    //
  },
  globalData: {
    id: '',
    name: ''
  },
  "darkmode": true,
  "debug": true,
});

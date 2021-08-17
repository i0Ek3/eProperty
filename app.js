App({
  globalData: {
    id: '',
    name: ''
  },
  onLoad: function() {
    console.log(this.globalData.name);
    console.log(this.globalData.id);
  }
});

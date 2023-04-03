Page({
  data: {
    motto: 'Hello Ray!',
  },
  goToIndex(e) {
    const { target } = e
    const {dataset} = target

    wx.navigateTo({
      url: `/ray/wechat/pages/${dataset.url}/index`,
    });
  },
});

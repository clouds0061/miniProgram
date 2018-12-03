// pages/test/test.js
const app = getApp();
var longitudes = 121;
var latitudes = 31;
var scale = 1.0;

Page({
  data: {
    longitudes: longitudes,
    latitudes: latitudes,
  },
  addLongitude:function(){
    longitudes = longitudes + 0.2;
    this.setData({ longitudes: longitudes });
  },
  desLongitude:function(){
    longitudes = longitudes - 0.2;
    this.setData({ longitudes: longitudes});
  }
})
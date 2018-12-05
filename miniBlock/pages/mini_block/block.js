// pages/mini_block/block.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  btnStart: function (){
    var time = 0;
    var my_carvas = wx.createCanvasContext('canvas', this) //1.创建carvas实例对象，方便后续用。
    drawBlock(my_carvas, 0)
    start(time);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var my_carvas = wx.createCanvasContext('canvas', this) //1.创建carvas实例对象，方便后续用。
    my_carvas.setStrokeStyle('orange') //设置边框颜色。
    for(var i = 0;i<15;i++){
      for(var j = 0 ;j<27;j++){
        //my_carvas.strokeRect(0, 0, 20*i, 20*i)
        var left = 20 * i;
        var top = 20*j;
        var right = 20;
        var bottom = 20;
        my_carvas.strokeRect(left, top, right, bottom)
      }
    }
    my_carvas.draw()   //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

function start(time){
  var my_carvas = wx.createCanvasContext('canvas', this) //1.创建carvas实例对象，方便后续用
  setTimeout(function () {
    drawBlock(my_carvas, time)
  }, 1000)
}

function drawBlock(my_carvas,time){
  my_carvas.setStrokeStyle('orange') //设置边框颜色。
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 27; j++) {
      //my_carvas.strokeRect(0, 0, 20*i, 20*i)
      var left = 20 * i;
      var top = 20 * j;
      var right = 20;
      var bottom = 20;
      my_carvas.strokeRect(left, top, right, bottom)
    }
  }
  my_carvas.setFillStyle('red')
  my_carvas.fillRect(40, time*20, 80, 20);
  my_carvas.fillRect(40, (time+1)*20, 20, 20);
  my_carvas.draw();
  time++;
  if(time<26)start(time)
}
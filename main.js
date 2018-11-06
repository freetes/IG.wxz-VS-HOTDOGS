const wxz = document.querySelector('div.wxz')


document.onkeydown=function(e){  //对整个页面文档监听 
  var keyNum=window.event ? e.keyCode :e.which;  //获取被按下的键值 
  
  // 上
  if(keyNum == 38){
    console.log('上')
    
  }
  // 下
  else if(keyNum == 40){
    console.log('下')

  }
  // 左
  else if(keyNum == 37){
    console.log('左')

  }
  else{
    console.log('右')
    
  }
}
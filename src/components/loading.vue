<template>
  <div class="loadbg">
    <div class='mock'>
      <div class='main'>
        <img src="//fcloud.duoke.co/image/icon/loading.png">
        <div class="lc">
          加载中...
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .loadbg{
    min-height:100vh;
    width: 100%;
    z-index: 10000;
    position:absolute;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .mock{
    width:15vh;
    height:15vh;
    top:50%;
    left:50%;
    margin-top: -7.5vh;
    margin-left: -7.5vh;
    position:absolute;
  }
  .main{
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.8);
    border-radius: 8px;
  }
  .lc{
    color: white;
    font-size: 15px;
    margin-bottom: 0vh;
    text-align: center;
  }
  .main img {
    margin: 2.5vh auto 1.5vh auto;
    animation:changDeg 1s linear 0.2s infinite;
  }
  @keyframes changDeg{
     0%{
       transform: rotate(0deg);
     }
     100%{
       transform: rotate(360deg);
     }
   }

</style>

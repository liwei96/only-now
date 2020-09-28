<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  beforeMount() {
    window.addEventListener("orientationchange", resetrem);
    //resize：屏幕的大小发生改变就触发监听事件resetrem
    window.addEventListener("resize", resetrem);
    resetrem();
    function resetrem() {
      var html = document.querySelector("html"); //获取到html元素
      var width = html.getBoundingClientRect().width; //获取屏幕的宽度
      html.style.fontSize = width / 23.5 + "px";
    }
  },
  mounted() {
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?230bc6d42c4b990e03d4981911da5ffe";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html {
  max-width: 540px;
}
@keyframes big-in {
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes big-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
.change-enter,
.change-leave-active {
  opacity: 0;
  scale: 0.5;
}
.change-enter-active {
  transition: opacity 0.5s;
  animation: big-in 0.5s;
}
.change-leave-active {
  transition: opacity 0.5s;
  animation: big-out 0.5s;
}
</style>

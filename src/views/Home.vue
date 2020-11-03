<template>
  <div class="home">
    <img class="btn" src="../assets/dp-btn.png" alt="" @click="back" />
    <img class="bg" src="../assets/dp.jpg" alt="" />
    <div class="time">
      <span>{{ date }}</span
      ><span>{{ time }}</span
      ><span>{{ day }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      time: '',
      day: '',
      date: ''
    }
  },
  methods: {
    back() {
      window.history.back()
    }
  },
  mounted() {
    const date = new Date()
    const mon = date.getMonth() + 1
    if (mon < 10) {
      mon = '0' + mon
    }
    const hour = date.getHours()
    const min = date.getMinutes()
    const day = date.getDay()
    const arr = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ];
    this.date = date.getFullYear() + '-' + mon + '-' + date.getDate()
    this.day = arr[day]
    this.time = hour + ':' + min
  },
};
</script>
<style scoped>
.home {
  position: relative;
  width: 1920px;
}
.btn {
  position: absolute;
  left: 10px;
  top: 10px;
}
.time {
  color: #fff;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
}
span {
  margin-left: 20px;
}
</style>

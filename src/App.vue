<template>
  <div id="app">
    <h1>Vue CI/CD 建構自動化部署流水線 - [ 部署 ]</h1>
    <p>寫一個加法 function 來進行單元測試</p>
    <div class="calc">
      <span>
        <label for=""></label>
        <input v-model="number1" type="number">
      </span>
      <span class="symbol">+</span>
      <span>
        <label for=""></label>
        <input v-model="number2" type="number">
      </span>
      <span class="symbol">=</span>
      <span class="result">{{ result }}</span>
      <button @click="addition(number1, number2)">計算</button>
      <p class="remind" v-if="isRemind">兩個參數都要輸入喔！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      result: null,
      number1: null,
      number2: null,
      isRemind: false,
    };
  },
  methods: {
    addition(n1, n2) {
      this.isRemind = false;
      if (n1 && n2) {
        const input1 = parseInt(n1, 0);
        const input2 = parseInt(n2, 0);
        this.result = this.calc(input1, input2);
      } else {
        this.isRemind = true;
      }
    },
    calc(n1, n2) {
      return n1 + n2;
    },
  },
};
</script>

<style>
.calc{
  display: flex;
  align-items: center;
}
.symbol{
  margin: 0 10px;
}
.remind{
  margin-left: 10px;
  color: red;
}
.result{
  display: inline-block;
  width: 100px;
  height: 35px;
  background: #eec;
  margin: 10px;
  line-height: 35px;
  text-align: center;
}
</style>

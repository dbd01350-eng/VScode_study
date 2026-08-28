<!-- 함수 -->
<script setup>
import { ref } from "vue";
console.log(ref);
const msg = ref("안녕,뷰");
const msg2 = ref("반응형 데이터");
console.log(msg);
const img = ref("./357.jpg");
const counter = ref(0);
const addOne = () => counter.value++;
const minusOne = () => (counter > 0 ? counter.value-- : (counter = 0));
const deliveryInst = ref("");
const newTodo = ref("");
const todos = ref([]);
const addTodo = () => {
  if (newTodo.value === "") return;
  todos.value.push(newTodo.value);
  newTodo.value = "";
};
</script>
<!-- UI -->
<template>
  <br>
  <h2>할일</h2>
  <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할일입력" />
  <button @click="addTodo">등록</button>
  <p v-if="todos.length === 0">할일이 없다</p>
  <ul v-else>
    <li v-for="(td, idx) in todos" :key="idx">{{ td }}</li>
  </ul>
  <!-- v-model -->
   <tr></tr>
   <br>
  <h2>배송메모</h2>
  <input type="text" placeholder="배송메시지" v-model="deliveryInst" />
  <h3>입력중인 메시지:{{ deliveryInst }}</h3>

  <h1>VUE 연습</h1>
  <p>{{ msg }}</p>
  <p>{{ msg2 }}</p>
  <!-- v-bind -->
  <img :src="img" alt="" />
  <!-- v-on -->
   <br>
  <h2>클릭수:{{ counter }}</h2>
  <button @click="addOne">+1</button>
  <button @click="minusOne">-1</button>
  <br>
</template>


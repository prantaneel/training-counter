<script setup lang="ts">
import { ref, computed } from "vue";

const formTitle = ref("Booking form");
const formDescription = ref("This is a test booking form.")
const date = ref("");
const time = ref("9:00 AM");
const groupSize = ref(10); // 1
const price = ref(10);
const kinspotFee = ref(0.05);

const name = ref("");
const email = ref("");
const phoneNumber = ref("");
const message = ref("");

const result = ref("");


const totalPrice = computed(() => {
  const fee = price.value * groupSize.value * kinspotFee.value;
  return (price.value * groupSize.value) + fee; 
});

const messageCounter = computed(() => {
  return message.value?.length;
});

function setResult() {
result.value = name.value
}

</script>

<template>
  <form @submit.prevent>
   <h1>{{formTitle}}</h1>
    <p> {{ formDescription }}</p> 
    
    <hr />

    <h2 class="total-price">      
      $ {{ totalPrice }}
    </h2>

    <div>
      <div><label class="input-label">Name:</label></div>
      <input class="form-input" name="name" id="name" v-model="name" placeholder="Enter your name" />
    </div>

    <div>
      <div><label class="input-label">Email:</label></div>
      <input class="form-input" name="email" type="email" id="email" v-model="email" />
    </div>

    <div>
      <div><label class="input-label">Phone number:</label></div>
      <input class="form-input" name="phone" type="tel" id="phone" v-model="phoneNumber" />
    </div>    

    <div>
      <div><label class="input-label">Groups size: </label></div>
      <input class="form-input" name="groupsize" type="number" id="groupSize" v-model="groupSize" />
    </div>    

    <div>
      <div class="message-header">
        <label class="input-label">Message:</label>
        <span class="message-counter"> {{ message-header }} </span>
      </div>
      <textarea class="form-input" name="message" id="message" rows="6" v-model="message"></textarea>
    </div>

    <button @click="setResult()" type="button">Book this spot</button>
  </form>
</template>

<style scoped>
.total-price {
  color: red;
  font-size: 64px;
  margin-bottom: 20px;
  background-color: yellow;
  padding: 10px;
  text-align: center;
}

.input-label {
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
}

.form-input {
  padding: 10px 8px 10px 8px;
  width: 300px;
  margin-bottom: 20px;
}

.message-header {
  width: 300px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.message-counter {
  color: red;
}
</style>

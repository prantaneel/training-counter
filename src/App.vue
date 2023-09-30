<script setup lang="ts">
import { arrayBuffer } from "stream/consumers";
import { ref, computed } from "vue";

const formTitle = ref("Booking form");
const formDescription = ref("This is a test booking form.")

const price = ref(10);
const kinspotFee = ref(0.05);

const date = ref("");
const time = ref("9:00 AM");
const groupSize = ref(10); // 1

const name = ref("");
const email = ref("");
const phoneNumber = ref("");

const message = ref(""); // optional

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

const isFormValid = computed(() => {
  if (!date.value) return false;
  if (!time.value) return false;
  if (!name.value) return false;
  if (!email.value) return false;
  if (!phoneNumber.value) return false;
 
  // form is valid 
  return true 
});

const nameMessage = computed(() => {
  const name = "Sarina";
  return showMessage(name.toLowerCase() == "treigh");
})

const formMessage = computed(() => {  
  return showMessage(isFormValid.value);
})

function showMessage(isValid: boolean) {
  return isValid ? "Form is valid" : "Form is not valid";  
}


function makeCurrency(value: number) {
  return `$${value} USD`;
}

function setMessagePlaceholder(name: string) {
  const fieldName = name ? name : "Dear friend";
  message.value = `Please type your message, ${fieldName}`;
}

// function isFormValid() {    
//   if (!date.value) return false;
//   if (!time.value) return false;
//   if (!name.value) return false;
//   if (!email.value) return false;
//   if (!phoneNumber.value) return false;
 
//   // form is valid 
//   return true 
// }

</script>

<template>
  <form @submit.prevent>
   <h1>{{formTitle}}</h1>
    <p> {{ formDescription }}</p> 
    
    <hr />

    <h2 class="total-price">      
      $ {{ totalPrice }}
    </h2>

    <div :class="isFormValid ? 'success-message' : 'error-message' ">
      {{ formMessage }}
    </div>

    CURRENCY: {{ makeCurrency(100) }}
    CURRENCY2: {{ makeCurrency(2000000) }}

    <div>
      <div><label class="input-label">Name:</label></div>
      <input 
          class="form-input" 
          name="name" 
          id="name" 
          v-model="name" 
          placeholder="Enter your name" 
        />
    </div>

    <div>
      <div><label class="input-label">Email:</label></div>
      <input 
        class="form-input" 
        name="email" 
        type="email" 
        id="email" 
        placeholder="Enter your email" 
        v-model="email" 
      />
    </div>

    <div>
      <div><label class="input-label">Phone number:</label></div>
      <input class="form-input" name="phone" type="tel" id="phone" placeholder="Enter your phone number" v-model="phoneNumber" />
    </div>    

    <div>
      <div><label class="input-label">Groups size: </label></div>
      <input class="form-input" name="groupsize" type="number" placeholder="How many people are coming?" id="groupSize" v-model="groupSize" />
    </div>    

    <div>
      <div>
        <label for="" class="input-label">Date:</label>
      </div>
      <input type="date" id="date" name="date" class="form-input"
       v-model="date" min="2023-07-14">

    </div>

    <div>
      <div>
        <label class="input-label">Time:</label>
      </div>
      <input id="time" name="time" class="form-input" v-model="time" >
    </div>    

    <div>
      <div class="message-header">
        <label class="input-label">Message:</label>
        <span class="message-counter"> {{ message-header }} </span>
      </div>
      <textarea class="form-input" name="message" id="message" :placeholder="setMessagePlaceholder()" rows="6" v-model="message"></textarea>
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


.success-message,
.error-message {  
  text-align: center;
  padding: 10px 8px 10px 8px;  
  font-size: 24px;
  border-radius: 10px;
  margin-bottom: 40px
}

.error-message {
  background-color: #fecaca;
  color: #ef4444;
}

.success-message {
  background-color: #bbf7d0;
  color: #22c55e
}
</style>

<script setup>
import axios from "axios";
//import axios from "axios";

const loginurl = "http://project.test/api/login";

const csrfurl = "http://project.test/sanctum/csrf-cookie";

fetch(csrfurl, { credentials: "include" })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

const array = [1, 2, 3];

console.log(array);

setTimeout("console.log('Do not do this')", 1000);

var a;
var b;
a = 7;
b = 8;
console.log(a + b);

const json = '{ "fruit": "pineapple", "fingers": 10 }';
const obj = JSON.parse(json);
console.log(obj.fruit, obj.fingers);

console.log("Test here");

const target = { a: 1, b: 2 };

console.log(target);

const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing",
  },
};

const { age, ...rest } = Susan;

console.log(age, rest);

const fetchData = async () => {
  try {
    const quotes = await fetch("http://project.test/api/books");
    const response = await quotes.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

fetchData();






const plants =["kale","sukuma","mango"];

 const popped =plants.pop();
 console.log(popped);
 console.log(plants);


const words =["new","long","pop","pesa"];

const result=words.filter(
  value=>4
);
console.log(result);








</script>
<template>
  <div
    class="p-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
  >
    <div class="shrink-0">
      <img class="h-12 w-12" src="../assets/logo.jpg" alt="Login" />
    </div>
    <div>
      <div class="text-xl font-medium text-green">Vite</div>
      <p class="text-slate-500 text-blue " >Register!</p>
    </div>
  </div>
  <br />
  <div
    class="p-7 max-wsm container  mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-7"
  >
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">Please Enter password.</p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-center">
          <router-link to="/Home">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </router-link>
        </div>
        <br />
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
          onClick="forgot()"
        >
          Forgot Password?
        </a>
      </div>
    </form>
    <p></p>
    <p class="text-center text-gray-500 text-xs">
      &copy;2022 Tonny. All rights reserved.
    </p>
  </div>
  <br />
  <!-- <div class='flex items-center justify-center'>
    <router-link to="/Home">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " 
    > Next</button>
    </router-link>
  </div> -->
  <!-- <div class='flex items-center justify-center'>
<button> Search</button>
  </div> -->
  </template>

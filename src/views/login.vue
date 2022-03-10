<script setup>
import axios from "axios";

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



const forgot = "login()";
 
 
  


</script>
<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
  >
    <div class="shrink-0">
      <img class="h-12 w-12" src="../assets/logo.png" alt="Login" />
    </div>
    <div>
      <div class="text-xl font-medium text-blue">App</div>
      <p class="text-slate-500">Register!</p>
    </div>
  </div>
  <div
    class="p-6 max-wsm container mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
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
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick="login()"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
          onClick="forgot()"
        >
          Forgot Password?
        </a>
      </div>
    </form>

    <p class="text-center text-gray-500 text-xs">
      &copy;2022 Tonny. All rights reserved.
    </p>
  </div>
  <div>
    <router-link to="/Home"><button class="flex">Login</button></router-link>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    ></button>
  </div>
</template>

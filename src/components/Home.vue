<script>

import axios from "axios";

//const url = "http://project.test/students/";

// fetch(url)
const csrfurl = "http://project.test/sanctum/csrf-cookie";

fetch(csrfurl, { credentials: "include" })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


axios.get('http://project.test/api/students/', { credentials: "include" })
  .then((response) => {
    console.log(response);
  })
 .catch((error) => {
   console.log(error)
   
 })
// var a;
// var b;
// a = 4;
// b = 5;
// console.log(a + b);

function update() {
  var element = document.getElementById("myprogressBar");   
  var width = 1;
  var identity = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
</script>

<template>
  <!-- <div class="row">
    <button class="primary button">Login</button>
    <input type="text" class="p-2 border rounded" />
  </div> -->
  
  <div class="center">
    <table class="tabl-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Author</th>
          <th class="px-4 py-2">Views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Intro to CSS</td>
          <td class="border px-4 py-2">Adam</td>
          <td class="border px-4 py-2">858</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2">A</td>
          <td class="border px-4 py-2">Adam</td>
          <td class="border px-4 py-2">112</td>
        </tr>
        <tr>
          <td class="border px-4 py-2"></td>
          <td class="border px-4 py-2"></td>
          <td class="border px-4 py-2"></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class=" primary button">
    <router-link to="/Navbar">Home</router-link>
  </div>
  <div id="Progress_Status">
  <div id="myprogressBar"></div>
</div>

<svg class="animate-bounce w-6 h-6 ...">
  <!-- ... -->
</svg>
</template>
<style scoped>

#Progress_Status {
  width: 50%;
  background-color: #ddd;
}
  
#myprogressBar {
  width: 10%;
  height: 35px;
 position: center;
  background-color: #4CAF50;
  text-align: center;
  line-height: 32px;
  color: black;
}
</style>

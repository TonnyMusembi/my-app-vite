<script>
import axios from "axios";
// export default {

// }

// data() {
//     return {

//     }
// },


const url='http://project.test/api/students/';

fetch(url)
.then((response) => {
  console.log(response)
})
.then((error) => {
  console.log(error)
  
})


</script>
<template>
  <div class="col-6">
    <button class="primary button">Login</button>
    <input type="text" class="p-2 border rounded" />
  </div>
  <div class="relative h-32 w-32 ...">
    <div class="absolute left-0 top-0 h-16 w-16 ...">01</div>
    <div>
      <!-- </div>router-link to="/login">Home</router-link> -->
    </div>
  </div>
  <form class="flex items-center space-x-6">
    <div class="shrink-0">
      <img
        class="h-16 w-16 object-cover rounded-full"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
        alt="Current profile photo"
      />
    </div>
    <label class="block">
      <span class="sr-only">Choose profile photo</span>
      <input
        type="file"
        class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
    </label>
  </form>
  <div class=" flex">
<table class="table-auto">
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
      <td class="border px-4 py-2">Intro to JavaScript</td>
      <td class="border px-4 py-2">Chris</td>
      <td class="border px-4 py-2">1,280</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import axios from "axios";
// export default {

// }

// data() {
//     return {

//     }
// },


const url='';

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
</template>

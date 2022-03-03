<script setup>
// import AppVue from '../App.vue';

</script>

<template>
  <div>
    <button class="bg-blue-500">Save changes</button>
  </div>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
  >
    <div class="shrink-0">
      <img class="h-12 w-12" src="../assets/logo.png" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
  <div col="10">
    <label>Name</label>
    <input type="text" class="p-2 border rounded"/>
    <p/>
  </div>
  <div class="col-10">
  <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
</div>
<div>
    
</div>
</template>

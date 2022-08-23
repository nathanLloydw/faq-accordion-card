<template>
  <div class="w-full m-auto w-[76%] flex justify-between py-16 font-ubuntu">
    <div class="flex items-center text-white font-medium underline-offset-1">
      <img src="public/images/logo.svg" class="pr-[65px]">
      <div class="pr-6 cursor-pointer">
        <span class="pr-3 hover:underline opacity-75">Product</span>
        <i class="fa-solid fa-angle-down text-xs"></i>
      </div>
      <div class="pr-6 cursor-pointer">
        <span class="pr-3 hover:underline opacity-75">Company</span>
        <i class="fa-solid fa-angle-down text-xs"></i>
      </div>
      <div class="pr-6 cursor-pointer group">
        <span class="pr-3 hover:underline hover:opacity-100 opacity-75">Connect</span>
        <i class="fa-solid fa-angle-down text-xs"></i>
        <div class="absolute hidden group-hover:block">
          <ul class="relative left-[-30px] px-5 py-6 mt-6 bg-white text-black rounded-md font-normal w-40">
            <li class="py-1 hover:font-semibold">Contact</li>
            <li class="py-1 hover:font-semibold">Newsletter</li>
            <li class="py-1 hover:font-semibold">LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <button class="text-white opacity-75 font-medium">Login</button>
      <button class="text-light-red bg-white font-bold hover:bg-v-light-red hover:text-white">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "desktop_navigation"
}
</script>

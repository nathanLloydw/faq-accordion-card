<template>
  <div class="py-16 font-ubuntu">
    <div class="w-[76%] m-auto flex justify-between">
      <img src="public/images/logo.svg">
      <i class="fa-solid fa-bars text-white text-3xl my-auto" @click="showMenu = !showMenu"></i>
    </div>

    <div v-if="showMenu" class="absolute z-10 w-full m-auto">
      <div class="w-[76%] m-auto bg-white rounded-md mt-10 pt-4 drop-shadow-2xl text-center">

        <h5 class="w-max m-auto cursor-pointer py-4 text-v-dark-desaturated-blue font-medium">Product <i class="fa-solid fa-angle-down pl-4 text-[16px] text-v-light-red"></i> </h5>

        <h5 class="w-max m-auto cursor-pointer py-4 text-v-dark-desaturated-blue font-medium">Company<i class="fa-solid fa-angle-down pl-4 text-[16px] text-v-light-red"></i></h5>

        <div class="cursor-pointer pt-4 pb-8 mx-4 border-2 border-b-gray-200 border-t-white border-x-white">
          <h5 class="w-max m-auto text-v-dark-desaturated-blue font-medium">Connect<i class="fa-solid fa-angle-down pl-4 text-[16px] text-v-light-red"></i></h5>
          <div class="bg-gray-100 mt-4 py-4 rounded-md">
            <ul>
              <li class="py-3 text-v-dark-desaturated-blue text-lg font-medium">Contact</li>
              <li class="py-3 text-v-dark-desaturated-blue text-lg font-medium">Newsletter</li>
              <li class="py-3 text-v-dark-desaturated-blue text-lg font-medium">LinkedIn</li>
            </ul>
          </div>
        </div>
        <div class="py-8 flex flex-col">
          <button class="text-v-dark-desaturated-blue font-medium pb-4">Login</button>
          <button class="text-white bg-gradient-to-r from-[#f87b69] to-light-red font-bold w-max m-auto px-12">Sign Up</button>
        </div>

        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "mobile_navigation",
  data() {
    return {
      showMenu: false,
    };
  },
}
</script>

<style scoped>

</style>
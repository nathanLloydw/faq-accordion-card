<script setup>
  import { ref } from 'vue'

  const FAQs = ref([
    {id:1, question:'How many team members can I invite?', answer:'No more than 2GB. All files in your account must fit your allotted storage space.'},
    {id:2, question:'What is the maximum file upload size?', answer:'No more than 2GB. All files in your account must fit your allotted storage space.'},
    {id:3, question:'How do I reset my password?', answer:'No more than 2GB. All files in your account must fit your allotted storage space.'},
    {id:4, question:'Can I cancel my subscription?', answer:'No more than 2GB. All files in your account must fit your allotted storage space.'},
    {id:5, question:'Do you provide additional support?', answer:'No more than 2GB. All files in your account must fit your allotted storage space.'}]
  );

  const activeFAQ = ref(2);

</script>

<template>
  <div>
    <h1 class="text-center lg:text-left">FAQ</h1>
    <div class="flex flex-col w-[79%] m-auto lg:m-0 pt-4">
      <div class="py-2 lg:py-4 border-b border-gray-200 cursor-pointer" v-for="faq in FAQs" @click="activeFAQ = faq.id">
        <div class="flex justify-between items-center">
          <span class="text-sm text-v-dark-grayish-blue" :class="{ 'font-bold text-v-dark-desaturated-blue': faq.id === activeFAQ }">{{ faq.question }}</span>
          <img class="inline-block mx-4 transition-all" :class="{ 'rotate-180': faq.id === activeFAQ }" src="public/images/icon-arrow-down.svg">
        </div>
        <div class="overflow-hidden transition-all text-xs text-dark-grayish-blue" :class="{ 'h-0': faq.id !== activeFAQ,'pt-3':faq.id === activeFAQ }">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
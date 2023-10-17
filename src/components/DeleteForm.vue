<script setup>
import { servicesStore } from "../stores/Services";
import { ref, onMounted } from "vue";
const store = servicesStore();
const services = ref([{ message: "Foo" }, { message: "Bar" }]);

onMounted(async () => {
  // Populate de home with he current data.
  try {
    //store.fetchData();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="mx-auto max-w-2xl">
      <div class="text-center">
        <h2 class="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
          Delete item
        </h2>
      </div>

      <!-- Card -->
      <div
        class="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700"
      >
        <form>
          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-comment-name-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Service selector</label
            >
            <select
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            >
              <option selected>Open this select menu</option>
              <option v-for="service in services">{{ service.message }}</option>
            </select>
          </div>
          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-comment-name-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Document ID</label
            >
            <input
              type="text"
              id="hs-feedback-post-comment-name-1"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Company ID"
              disabled
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-comment-name-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Company name</label
            >
            <input
              type="text"
              id="hs-feedback-post-comment-name-1"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Enter company name"
              disabled
            />
          </div>

          <div class="mt-6 grid space-y-3">
            <input
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
              value="Delete"
            />
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>

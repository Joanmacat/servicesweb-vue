<script setup>
import { ref } from "vue";
import { servicesStore } from "../stores/Services";
const store = servicesStore();

const newService = ref("");
const newId = ref("");
const newTitle = ref("");
const newCategory = ref("");
const newDescription = ref("");
const newLocation = ref("");
const newUrl = ref("");
const newImage = ref("");
</script>

<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="mx-auto max-w-2xl">
      <div class="text-center">
        <h2 class="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
          Add new item
        </h2>
      </div>

      <!-- Card -->
      <div
        class="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700"
      >
        <form @submit.prevent="handleSubmit">
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
              v-model="newTitle"
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-category-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Category</label
            >
            <input
              type="text"
              id="hs-feedback-post-category-1"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Consultancy, accountant, restaurant..."
              v-model="newCategory"
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-location-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Location</label
            >
            <input
              type="text"
              id="hs-feedback-post-location-1"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Washington D.C"
              v-model="newLocation"
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-url-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >URL</label
            >
            <input
              type="url"
              id="hs-feedback-post-url-1"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="https://www.example.com"
              v-model="newUrl"
            />
          </div>

          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-image-url-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Image URL</label
            >
            <input
              type="url"
              id="hs-feedback-post-image-url-1"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="https://www.example.com/image.jpg"
              v-model="newImage"
            />
          </div>

          <div>
            <label
              for="hs-feedback-post-comment-textarea-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Description</label
            >
            <div class="mt-1">
              <textarea
                id="hs-feedback-post-comment-textarea-1"
                name="hs-feedback-post-comment-textarea-1"
                rows="3"
                class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Describe briefly your activity"
                v-model="newDescription"
              ></textarea>
            </div>
          </div>

          <div class="mt-6 grid">
            <button
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>
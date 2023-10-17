<script setup>
import { ref } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import Toast from "./Toast.vue";

// Definition of variables
let toastMessage = ref("");
let showToast = ref(false);
let newTitle = ref("");
let newCategory = ref("");
let newDescription = ref("");
let newLink = ref("");
let newImage = ref("");
let newLocation = ref("");

// Add a new service async function
const addNewService = async () => {
  let data = {
    title: newTitle.value,
    category: newCategory.value,
    description: newDescription.value,
    link: newLink.value,
    image: newImage.value,
    location: newLocation.value,
  };
  try {
    //await addDoc(collection(db, "services"), data);
    triggerToast("Service added successfully");

    // Clean variables after add new document
    newTitle.value = "";
    newCategory.value = "";
    newDescription.value = "";
    newLink.value = "";
    newImage.value = "";
    newLocation.value = "";
  } catch (error) {
    triggerToast(error);
  }
};

// showToast function
const triggerToast = (message) => {
  showToast.value = true;
  toastMessage = message;
  setTimeout(() => (showToast.value = false), 3000);
};
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
        <form @submit.prevent="addNewService()">
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
              v-model="newLink"
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

          <div class="mt-6 grid space-y-3">
            <Transition name="slide-fade">
              <Toast v-if="showToast" :message="toastMessage" />
            </Transition>
            <input
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

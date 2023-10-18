<script setup>
import { servicesStore } from "../stores/Services";
import { ref, onMounted } from "vue";
import { db } from "../utils/firebase";
import Toast from "./Toast.vue";
import { collection, getDocs } from "firebase/firestore";

const store = servicesStore();
const services = ref([]);
const servicesList = ref([]);
const selectedService = ref(null);
const selectedId = ref(null);
let toastMessage = ref("");
let showToast = ref(false);
let i = 0;

onMounted(async () => {
  try {
    await store.fetchData();
    services.value = store.services;
    servicesList.value = Object.keys(services.value).map(
      (key) => services.value[key]
    );

    const colRef = collection(db, "services");
    const docsSnap = await getDocs(colRef);
    selectedId.value = {};

    docsSnap.forEach((doc) => {
      selectedId.value[doc.id] = servicesList.value[i].title;
      i++;
    });
  } catch (error) {
    console.error(error);
  }
});

// showToast function
const triggerToast = (message) => {
  showToast.value = true;
  toastMessage = message;
  setTimeout(() => (showToast.value = false), 3000);
};

const removeDocument = async (service) => {
  try {
    await store.deleteService(service);
    triggerToast("Service deleted successfully");
  } catch (error) {
    triggerToast(error);
  }
};
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
        <form @submit.prevent="removeDocument(selectedService)">
          <div class="mb-4 sm:mb-8">
            <label
              for="service-selector"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Service selector
            </label>
            <select
              id="service-selector"
              v-model="selectedService"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            >
              <option v-for="(title, id) in selectedId" :key="id" :value="id">
                {{ title }}
              </option>
            </select>
          </div>
          <div class="mb-4 sm:mb-8">
            <label
              for="document-id"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Document ID</label
            >
            <input
              id="document-id"
              type="text"
              class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              :value="selectedService ? selectedService : 'Company ID'"
              disabled
            />
          </div>

          <div class="mt-6 grid space-y-3">
            <Transition name="slide-fade">
              <Toast v-if="showToast" :message="toastMessage" />
            </Transition>
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

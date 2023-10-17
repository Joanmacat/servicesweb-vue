<script setup>
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import { servicesStore } from "../stores/Services";
import Title from "./Title.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";

const store = servicesStore();
const displayedServices = ref([]);
let searchInput = ref("");
const services = ref(store.services);

const servicesListTmp = Object.keys(services).map((key) => services[key]);
const servicesList = servicesListTmp[3];

const loading = ref(false);

// Function to load more services from the store
const loadMoreServices = () => {
  const startIndex = displayedServices.value.length;
  const endIndex = startIndex + 6;

  if (startIndex <= services.value.length) {
    loading.value = true;
    setTimeout(() => {
      displayedServices.value = displayedServices.value.concat(
        services.value.slice(startIndex, endIndex)
      );
      loading.value = false;
    }, 1000); // Simulate loading delay
  }
};
// Event listener for scrolling
const handleScroll = () => {
  const scrollEl = document.documentElement;
  const offset = 10; // Load more services when user is 100px from the bottom

  if (
    scrollEl.scrollTop + scrollEl.clientHeight + offset >=
    scrollEl.scrollHeight
  ) {
    loadMoreServices();
  }
};

onMounted(async () => {
  // Populate de home witht he current data.
  try {
    store.fetchData();
    console.log(store.getData[0]);
  } catch (error) {
    console.log(error);
  }

  loadMoreServices(); // Initially load the first set of services
  window.addEventListener("scroll", handleScroll);
});

const filterServices = computed(() => {
  const searchValue = searchInput.value.toLowerCase();

  const titleFiltered = servicesList.filter(({ title }) =>
    title.toLowerCase().includes(searchValue)
  );
  const categoryFiltered = servicesList.filter(({ category }) =>
    category.toLowerCase().includes(searchValue)
  );

  return titleFiltered.length > 0 ? titleFiltered : categoryFiltered;
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- CONTAINER-->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <Title></Title>
    <!-- Form -->
    <form>
      <div
        class="relative z-10 flex space-x-3 p-2 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]"
      >
        <div class="flex-[1_0_0%]">
          <label
            for="hs-search-article-1"
            class="block text-sm text-gray-700 font-medium dark:text-white"
            ><span class="sr-only">Search your service</span></label
          >
          <input
            type="search"
            v-model="searchInput"
            name="hs-search-article-1"
            id="hs-search-article-1"
            class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
            placeholder="Search your service"
          />
        </div>
        <div class="flex-[0_0_auto]">
          <a
            class="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </form>
    <br />
    <!-- GRID -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="card-grid">
      <div
        v-for="(service, id) in displayedServices"
        :key="id"
        v-show="searchInput == ''"
      >
        <Card
          :title="service.title"
          :description="service.description"
          :category="service.category"
          :image="service.image"
          :link="service.link"
        ></Card>
      </div>

      <div
        v-for="(service, id) in filterServices"
        :key="id"
        v-show="searchInput !== ''"
      >
        <Card
          :title="service.title"
          :description="service.description"
          :category="service.category"
          :image="service.image"
          :link="service.link"
        ></Card>
      </div>

      <p v-if="loading">LOADING SUSPENSE...</p>
      <!-- END GRID -->
    </div>

    <Footer></Footer>
    <!-- END CONTAINER -->
  </div>
</template>

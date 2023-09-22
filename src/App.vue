<script setup>
import Title from "./components/title.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
import Search from "./components/Search.vue";
import { servicesStore } from "./stores/Services";

const store = servicesStore();
const services = store.services;
</script>

<template>
  <!-- CONTAINER-->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <Title></Title>
    <Search></Search>
    <br />
    <!-- GRID -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="card-grid">
      <Card></Card>
      <!-- END GRID -->
    </div>

    <Footer></Footer>
    <!-- END CONTAINER -->
  </div>
</template>

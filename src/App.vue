<template>
  <Suspense>
    <router-view />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

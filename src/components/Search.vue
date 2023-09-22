<template>
  <!-- Form -->
  <form>
    <div
      class="relative z-10 flex space-x-3 p-2 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]"
    >
      <div class="flex-[1_0_0%]">
        <label
          for="hs-search-article-1"
          class="block text-sm text-gray-700 font-medium dark:text-white"
          ><span class="sr-only">Search service</span></label
        >
        <input
          type="email"
          name="hs-search-article-1"
          id="hs-search-article-1"
          class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
          placeholder="Search service"
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
  <!-- End Form -->
</template>

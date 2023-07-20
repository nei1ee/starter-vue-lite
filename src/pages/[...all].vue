<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="text-center">
    <div class="px-4 pt-10">
      <div class="i-tabler-alert-circle text-5xl text-blue-500 dark:text-gray-200" />
      <p>
        Not Found
      </p>
    </div>
    <div class="m-3">
      <button
        class="inline-block cursor-pointer rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </main>
</template>

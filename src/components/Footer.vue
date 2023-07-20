<script setup lang="ts">
import { toggleDark } from '~/composables/dark'
</script>

<template>
  <nav class="icon-color mt-6 flex items-center justify-center gap-4 text-2xl opacity-75">
    <RouterLink class="hover:text-blue-500" to="/" title="Home">
      <div class="i-tabler-icons" />
    </RouterLink>

    <button class="hover:text-blue-500" title="Toggle dark mode" @click="toggleDark()">
      <div class="i-tabler-sun dark:i-tabler-moon" />
    </button>

    <a class="hover:text-blue-500" rel="noreferrer" href="https://github.com/zguolee/starter-vue-lite" target="_blank" title="GitHub">
      <div class="i-tabler-brand-github" />
    </a>
  </nav>
</template>

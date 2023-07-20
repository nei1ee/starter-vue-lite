<script setup lang="ts">
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()

function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="px-4 pt-10">
    <div class="i-tabler-icons text-5xl" />
    <p>
      <a rel="noreferrer" href="https://github.com/zguolee/starter-vue-lite" target="_blank">
        Starter Vue Lite
      </a>
    </p>
    <p class="py-4">
      <em class="text-sm opacity-75">Opinionated Vite Starter Template</em>
    </p>
    <input
      id="input" v-model="name" placeholder="What's your name?" aria-label="What's your name?" type="text"
      autocomplete="false" class="w-250px bg-transparent px-4 py-2 text-center u-border" border="~ rounded"
      outline="none active:none" @keydown.enter="go"
    >
    <label class="hidden" for="input">What's your name?</label>

    <div class="m-4">
      <button
        class="inline-block cursor-pointer rounded bg-blue-500 px-4 py-1 text-white disabled:(cursor-default bg-gray-600 opacity-50) hover:bg-blue-600"
        :disabled="!name" @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: home
</route>

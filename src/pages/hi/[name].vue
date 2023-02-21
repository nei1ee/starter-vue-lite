<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div class="px-4 pt-10">
    <div class="i-carbon-pedestrian text-5xl" />

    <p>
      {{ `Hi, ${name}` }}
    </p>

    <p class="py-4">
      <em class="text-sm opacity-75">Demo of dynamic route</em>
    </p>

    <template v-if="user.otherNames.length">
      <p mt-4 text-sm>
        <span opacity-75>Also known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div class="m-4">
      <button
        class="inline-block cursor-pointer rounded bg-teal-700 px-4 py-1 text-white hover:bg-teal-800"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  const router = useRouter()
  const localePath = useLocalePath()

  onMounted(() => {
    router.push(localePath("/hand"))
  })
</script>

<template>
  <div class="lg:p-10 text-center w-full text-2xl font-semibold">
    {{ $t('welcome') }}
  </div>
</template>


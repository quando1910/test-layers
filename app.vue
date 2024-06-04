<script setup lang="ts">
const { refreshSessionContext } = useSessionContext();

onMounted(() => {
  refreshSessionContext();
});
</script>

<template>
  <NuxtLayout>
    <div>
      <NuxtLink :to="'/'">Home</NuxtLink>
      <NuxtLink :to="'/login'">Login</NuxtLink>
      <NuxtLink :to="'/about'">About</NuxtLink>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

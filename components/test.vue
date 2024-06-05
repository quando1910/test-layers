<script setup lang="ts">
import { useCount } from '~/composables/useCount';

const { count, setCount } = useCount();
</script>
<template>
  <h1>
    test component {{ count }}
  </h1>
  <button @click="setCount">increase</button>
</template>
<script setup lang="ts">
defineProps<{
  word: string;
}>();
</script>

<template>
  <div class="failed-overlay-view">
    <div class="failed-overlay-content">
      <h3>The word was</h3>
      <h2 class="failed-overlay-word">{{ word }}</h2>
    </div>
  </div>
</template>

<style scoped>
.failed-overlay-view {
  position: absolute;
  top: 35vh;
  left: 50vw;
  transform: translateX(-60px);
}
.failed-overlay-content {
  padding: 20px;
  border-radius: 10px;
  background-color: #ce2f2f;
  color: #fff;
}
.failed-overlay-word {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>

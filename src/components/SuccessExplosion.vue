<script setup lang="ts">
import ConfettiExplosion from 'vue-confetti-explosion';
</script>

<template>
  <div class="success-explosion-view">
    <ConfettiExplosion
      :particleCount="250"
      :force="0.75"
      :duration="10_000"
      :stageWidth="4000"
      :stageHeight="4000"
    />
  </div>
</template>

<style scoped>
.success-explosion-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  transform: translateX(50vw) translateY(20vh);
}
</style>

<script setup lang="ts">
defineProps<{
  columnIndex: number;
  rowIndex: number;
}>();
</script>

<template>
  <div class="tile-item">
    <span>Tile {{ columnIndex }}-{{ rowIndex }}</span>
  </div>
</template>

<style scoped>
.tile-item {
  border: 1px solid red;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
</style>

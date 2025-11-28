<script setup lang="ts">
defineProps<{
  columnIndex: number;
  rowIndex: number;
  isTileEnabled: boolean;
  letter: string;
}>();
</script>

<template>
  <div
    class="tile-item"
    :class="{ 'tile-item-enabled': isTileEnabled, 'tile-item-disabled': !isTileEnabled }"
  >
    <span>{{ letter }}</span>
  </div>
</template>

<style scoped>
.tile-item {
  border: 1px solid #aa17ce;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background-color: #aa17ce;
    color: #fff;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
}

.tile-item-enabled {
  color: black;
}
.tile-item-disabled {
  opacity: 0.3;
  cursor: not-allowed;

  &:hover {
    background-color: transparent;
    cursor: not-allowed;
  }
}
</style>

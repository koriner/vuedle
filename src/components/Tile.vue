<script setup lang="ts">
defineProps<{
  columnIndex: number;
  rowIndex: number;
  isTileEnabled: boolean;
  letter: string;
  result: 'correct' | 'incorrect' | 'present';
}>();
</script>

<template>
  <div
    class="tile-item"
    :class="{
      'tile-item-enabled': isTileEnabled,
      'tile-item-disabled': !isTileEnabled,
      'tile-item-correct': result === 'correct',
      'tile-item-incorrect': result === 'incorrect',
      'tile-item-present': result === 'present',
    }"
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
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;

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

.tile-item-correct {
  background-color: #44b23a;
  color: #fff;
}

.tile-item-incorrect {
  background-color: #d52a30;
  color: #fff;
}

.tile-item-present {
  background-color: #dfbf31;
  color: #fff;
}
</style>

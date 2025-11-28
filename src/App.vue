<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav class="nav-bar">
          <div>
            <RouterLink to="/">Home</RouterLink>
          </div>
          <div>
            <RouterLink to="/play">Play</RouterLink>
          </div>
          <div>
            <RouterLink to="/about">About</RouterLink>
          </div>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;

  > div {
    padding: 0 10px;
  }
}
</style>

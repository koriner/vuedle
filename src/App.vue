<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <img src="@/assets/logo.png" alt="Vuedle Logo" class="logo" />
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
          <a href="#">Restart</a>
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

.logo {
  width: auto;
  height: 200px;
  border: 2px solid purple;
  border-radius: 6px;
  margin-top: 12px;
}

.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;

  > div {
    padding: 0 10px;
  }

  > a {
    padding: 0 10px;
    text-decoration: none;
    color: #2c3e50;
    cursor: pointer;
  }
}
</style>

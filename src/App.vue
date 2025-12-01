<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

function restartGame(event: Event) {
  event.preventDefault();
  window.location.href = '/play';
}
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
          <a href="#" @click.prevent="restartGame">Restart</a>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: 'Stack Sans Headline', sans-serif;
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
  font-family: 'Bungee Spice', sans-serif;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;

  div {
    padding: 0 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.25) skew(4deg, 2deg);
    }
  }

  a {
    padding: 0 10px;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    transform: scale(1.25) skew(4deg, 2deg);
  }
}

@media (max-width: 768px) {
  #layout {
    max-height: 100vh;
    overflow-y: hidden;
  }

  .logo {
    height: 100px;
  }
}
</style>

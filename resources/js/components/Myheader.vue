<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://kausar.info">
      <img src="images/mrk.png" alt="Kausar" width="100" height="160">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu is-active">
    <div class="navbar-start">

    <router-link to="/home" class="navbar-item">Home</router-link>
    <router-link to="/about" class="navbar-item">About</router-link>

    </div>
  </div>
</nav>
</template>

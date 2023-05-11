<template>
  <div id="app">
      <nav>
        <h1>진화 단계 가이드</h1>
        <router-link to="/Home">Start</router-link> |
        <router-link to="/NoColor">Start</router-link>
      </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.icon {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
}
img {
  width: 80%;
  height: 80%;
}
.box {
  border: solid grey 1px;
  flex-flow: column;
  width: 500px;
  align-self: center;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
	<div id="app">
		<left-menu />
		<router-view />
		<right-menu class="right-menu" />
	</div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 90px auto;
  position: relative;

  .right-menu {
    position: absolute;
    right: 0;
  }
}
</style>

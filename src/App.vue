<template>
	<div id="app">
		<left-menu class="left-menu" />
		<router-view />
		<right-menu class="right-menu" />
	</div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  overflow: hidden;
  display: grid;
  position: relative;

  .right-menu {
    position: absolute;
    right: 0;
    z-index: 30;
  }

  .left-menu {
    position: absolute;
    left: 0;
    z-index: 30;
  }
}
</style>

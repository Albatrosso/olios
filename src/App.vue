<template>
	<div id="app">
		<left-menu />
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 90px auto;
  position: relative;
}
</style>

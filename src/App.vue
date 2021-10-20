<template>
	<div id="app">
		<left-menu
			class="left-menu"
			@open-modal="isModalShown = !isModalShown"
		/>
		<router-view />
		<transition name="modal">
			<search-modal
				v-if="isModalShown"
				class="search-modal"
			/>
		</transition>
		<right-menu class="right-menu" />
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class App extends Vue {
	isModalShown = false;
};
</script>

<style>

</style>

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

  .search-modal {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .modal-enter-active {
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
  }

  .modal-leave-active {
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .modal-enter-to, .modal-leave {
    max-height: 100%;
    overflow: hidden;
  }

  .modal-enter, .modal-leave-to {
    overflow: hidden;
    max-height: 0;
  }
}
</style>

<template>
	<div class="home">
		<div class="home__header">
			<div class="home__title">
				Olios
			</div>
			<div class="home__subtitle">
				Newest furniture shop template
			</div>
			<button class="btn">
				View more
			</button>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class HomePage extends Vue {
};
</script>

<style lang="scss" scoped>
.home {
	text-transform: uppercase;
	background-image: url('../../public/img/mainfurniture.png');
	background-size: cover;
	background-position: left bottom;

	&__header {
		position: relative;
		margin-top: 100px;
	}

	&__title {
		font-size: 150px;
		line-height: 1em;
		font-weight: 200;
	}

	&__subtitle {
		font-size: 24px;
		letter-spacing: 1px;
		font-weight: 200;
		margin: 20px 0 30px;
	}
}
</style>

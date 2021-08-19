<template>
	<div
		class="home"
		:style="selected.img"
	>
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
		<div
			class="home__advert"
			:class="selected.title"
		>
			{{ selected.title }}
		</div>
		<div class="home__slider">
			<span
				v-for="slide in slider"
				:key="slide.title"
				class="dot"
				:class="{'dot--active': slide.title == selected.title}"
				@click="changeSelected(slide.title)"
			/>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class HomePage extends Vue {
	slider = [
		{
			title: 'newest',
			img: 'background-image: url(\'/img/newest.webp\');'
		},
		{
			title: 'coziest',
			img: 'background-image: url(\'/img/coziest.webp\');'
		},
		{
			title: 'stylish',
			img: 'background-image: url(\'/img/stylish.webp\');'
		},
		{
			title: 'just best',
			img: 'background-image: url(\'/img/best.webp\');'
		}
	];

	selected = this.slider[0];
	interval = '';

	created() {
		this.autoChangeSelected();
	}

	beforeDestroy() {
		clearInterval(this.interval);
	}

	changeSelected(title) {
		this.selected = this.slider.find(slide => slide.title === title);
	}

	autoChangeSelected() {
		let index = 0;

		this.interval = setInterval(() => {
			index++;
			if (index === 4) {
				index = 0;
			}
			this.selected = this.slider[index];
		}, 5000);
	}
};
</script>

<style lang="scss" scoped>
.home {
	text-transform: uppercase;
	background-size: cover;
	background-position: bottom;
	position: relative;

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

	&__advert {
		font-size: 320px;
		font-weight: 800;
		margin-top: -170px;
	}

	&__slider {
		width: 150px;
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 65px;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>

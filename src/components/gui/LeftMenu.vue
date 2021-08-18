<template>
	<div class="menu">
		<div class="menu__logo" />
		<div>
			<div
				v-for="route in routes"
				:key="route.path"
				class="menu__wrapper"
				@click="changeRoute(route.path)"
			>
				<div class="menu__item">
					<span class="menu__name">{{ route.name }}</span>
				</div>
			</div>
		</div>
		<div
			class="menu__item"
			:style="{ 'background-color': exitUrl }"
		/>
	</div>
</template>

<script>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class LeftMenu extends Vue {
	routes = [
		{
			name: 'Home',
			path: '/',
			icon: 'home'
		},
		{ 
			name: 'Cart',
			path: '/cart',
			icon: 'cart'
		},
		{ 
			name: 'Search',
			path: '/search',
			icon: 'search'
		}
	];

	exitUrl = 'background-image: url(\'../../../public/img/icons/exit.png\');';

	changeRoute(route) {
		this.$router.push(route).catch(e => {});
	}
};
</script>

<style lang="scss" scoped>
.menu {
	position: relative;
	height: 100vh;
	display: grid;
	justify-items: center;
	grid-template-rows: 100px auto 50px;
	padding: 30px 0;
	background-color: $white;
	box-shadow: -1px 1px 8px 0px rgba(34, 60, 80, 0.2);

	&__logo {
		width: 35px;
		height: 35px;
		background-image: url('../../../public/img/olios.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	&__wrapper {
		padding: 25px;
		&:hover .menu__name {
			display: inline-block;
		}
	}

	&__item {
		width: 25px;
		height: 25px;
		cursor: pointer;
		position: relative;
		background-color: $main-color;
	}

	&__name {
		padding: 15px 20px;
		position: absolute;
		background-color: $white;
		display: none;
		transition: .4s;
		left: 25px;
		top: -15px;
		animation-name: run;
		animation-duration: .4s;
	}

	@-webkit-keyframes run {
		0% {
			opacity: 0;
		}

		100%{
			opacity: 1;
		}
	}
}
</style>
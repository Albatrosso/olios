<template>
	<div class="menu">
		<div class="menu__logo" />
		<div>
			<div
				v-for="item in routs"
				:key="item.path"
				class="menu__item-wrapper"
				@click="changeRoute(item.path)"
			>
				<div class="menu__item">
					<span class="menu__name">{{ item.name }}</span>
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
	routs = [
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
	display: grid;
	justify-items: center;
	grid-template-rows: 100px auto 50px;
	padding: 30px 0;
	background-color: $white;
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.1);

	&__logo {
		width: 35px;
		height: 35px;
		background-image: url('../../../public/img/olios.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	&__item-wrapper {
		padding: 25px;
		&:hover .menu__name {
			display: block;
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
		left: 25px;
		top: -15px;
	}
}
</style>
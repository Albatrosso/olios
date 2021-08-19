<template>
	<div>
		<div
			class="menu__button"
			@click="showMenu"
		/>
		<div
			class="menu"
			:class="{'menu--shown': isMenuShown}"
		>
			<div class="menu__wrapper">
				<div
					v-for="route in routes"
					:key="route.name"
					class="menu__item"
					@click="changeRoute(route.path)"
				>
					{{ route.name }}
					<div class="menu__icon" />
				</div>
			</div>
			<div class="menu__link">
				show all categories
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class RightMenu extends Vue {
	routes = [
		{
			name: 'living room',
			path: '/',
			icon: 'home'
		},
		{ 
			name: 'office',
			path: '/cart',
			icon: 'cart'
		},
		{
			name: 'for kids',
			path: '/',
			icon: 'home'
		},
		{ 
			name: 'kitchen',
			path: '/cart',
			icon: 'cart'
		},
		{ 
			name: 'accessories',
			path: '/search',
			icon: 'search'
		}
	];

	isMenuShown = false;

	showMenu() {
		this.isMenuShown = !this.isMenuShown;
	}

	changeRoute(route) {
		this.$router.push(route).catch(e => {});
		this.close();
	}

	@Emit('close')
	close() {
		this.isMenuShown = false;
	}
};
</script>

<style lang="scss" scoped>
.menu {
    position: relative;
    background-color: $white;
    width: 300px;
    text-transform: uppercase;
    height: 100vh;
    display: none;
	padding: 50px 0;
	box-shadow: -1px 1px 8px 0px rgba(34, 60, 80, 0.2);

    &--shown {
        display: grid;
		align-items: flex-end;
    }

    &__button {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: $white;
        box-shadow: -1px 1px 8px 0px rgba(34, 60, 80, 0.2);
        cursor: pointer;
        position: absolute;
        right: 40px;
        top: 50px;
        z-index: 5;
    }

	&__wrapper {
		align-self: center;
	}

	&__item {
		padding: 25px 50px;
		color: $dark-grey;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	&__icon {
		width: 60px;
		height: 50px;
		background-color: $main-color;
		margin-left: 25px;
	}

    &__link {
        position: relative;
        color: $main-color;
        cursor: pointer;
		margin-bottom: 12px;

        &::after {
            content: "";
            position: absolute;
            height: 2px;
            width: 50%;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            background-color: $main-color;
        }
    }
}
</style>
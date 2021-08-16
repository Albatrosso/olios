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
			<div class="menu-wrapper">
				categories
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

	isMenuShown = false;

	showMenu() {
		this.isMenuShown = !this.isMenuShown;
	}

	changeRoute(route) {
		this.$router.push(route).catch(e => {});
	}
};
</script>

<style lang="scss" scoped>
.menu {
    position: relative;
    background-color: $white;
    width: 250px;
    align-items: flex-end;
    text-transform: uppercase;
    height: 100vh;
    display: none;

    &--shown {
        display: block;
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

    &__link {
        position: relative;
        color: $main-color;
        cursor: pointer;

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
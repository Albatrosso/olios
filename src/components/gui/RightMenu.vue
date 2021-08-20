<template>
	<div>
		<div
			class="menu__button"
			:class="{'menu__button--shown': isMenuShown}"
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
					<div
						class="menu__icon"
						:style="route.url"
					/>
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
			url: 'background-image: url(\'/img/icons/living.png\');'
		},
		{ 
			name: 'office',
			path: '/cart',
			url: 'background-image: url(\'/img/icons/office.png\');'
		},
		{
			name: 'for kids',
			path: '/',
			url: 'background-image: url(\'/img/icons/kids.png\');'
		},
		{ 
			name: 'kitchen',
			path: '/cart',
			url: 'background-image: url(\'/img/icons/kitchen.png\');'
		},
		{ 
			name: 'accessories',
			path: '/search',
			url: 'background-image: url(\'/img/icons/accessories.png\');'
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
		background-image: url('../../../public/img/icons/menu.png');
		background-repeat: no-repeat;
		background-position: center;
        cursor: pointer;
        position: absolute;
        right: 40px;
        top: 50px;
        z-index: 5;

		&--shown {
        	background-image: url('../../../public/img/icons/cross.png');
    	}
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

		&:hover {
			color: $main-color;
		}
	}

	&__icon {
		width: 60px;
		height: 50px;
		margin-left: 25px;
		background-size: cover;
	}

    &__link {
        position: relative;
        color: $main-color;
        cursor: pointer;
		margin-bottom: 12px;

		&:hover {
			opacity: .6;
		}

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
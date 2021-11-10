<template>
	<div class="catalog container">
		<div class="catalog__header">
			<h1>Products</h1>
			<div>
				Living Room
				<div class="catalog__icon" />
			</div>
		</div>
		<div class="catalog__main">
			<div class="catalog__items">
				<div
					v-for="product in products"
					:key="product.id"
					class="item"
				>
					<div
						class="item__image"
						:style="product.photo"
					/>
					<div class="item__info">
						<div class="item__name">
							{{ product.name }}
						</div>
						<div class="item__desc">
							{{ product.description }}
						</div>
						<div class="item__price">
							${{ product.price }}
						</div>
					</div>
				</div>
			</div>
			<div class="catalog__footer">
				Show more products
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class CatalogPage extends Vue {
    products = [
    	{
    		id: '1',
    		name: 'Red seat',
    		description: 'Lorem ipsum dolor sit amet',
    		price: 45,
    		photo: 'background-image: url(\'/img/seat.png\');'
    	},
    	{
    		id: '2',
    		name: 'White table',
    		description: 'Lorem ipsum dolor sit amet',
    		price: 350,
    		photo: 'background-image: url(\'/img/table.png\');'
    	},
    	{
    		id: '3',
    		name: 'Blue seat',
    		description: 'Lorem ipsum dolor sit amet',
    		price: 35,
    		photo: 'background-image: url(\'/img/seatblue.png\');'
    	},
    	{
    		id: '4',
    		name: 'Modern bed',
    		description: 'Lorem ipsum dolor sit amet',
    		price: 120,
    		photo: 'background-image: url(\'/img/bed.png\');'
    	},
    	{
    		id: '5',
    		name: 'Dark seat',
    		description: 'Lorem ipsum dolor sit amet',
    		price: 50,
    		photo: 'background-image: url(\'/img/seatdark.png\');'
    	}
    ];
};
</script>

<style lang="scss" scoped>
.catalog {
    display: grid;
    grid-template-rows: 50px auto;
    grid-row-gap: 50px;
    height: 100vh;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        & > h1 {
            font-size: 48px;
            font-weight: 300;
        }

        & > div {
            color: $dark-grey;
        }
    }

    &__main {
        overflow: scroll;
        &::-webkit-scrollbar {
		display: none;
	}
    }

    &__footer {
        color: $main-color;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            opacity: .5;
        }
    }

    &__items {
        display: grid;
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-flow: dense;
        margin-bottom: 50px;
    }

    .item {
        background: $white;
        padding: 25px;
        text-align: left;
        cursor: pointer;

        &__image {
            width: 150px;
            height: 150px;
            background-size: cover;
            background-position: center;
            margin: 0 auto 30px;
        }

        &__name {
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 300;
        }

        &__desc {
            color: $grey;
            font-weight: 300;
            margin-bottom: 10px;
        }

        &__price {
            color: $main-color;
            font-weight: 700;
        }

        &:nth-of-type(5n-1), &:nth-of-type(5n-3) {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        &:nth-of-type(5n-1) {
            grid-column: span 2; 

            & .item__image {
                margin: 0 25px 0 0;
                width: 300px;
                height: 100%;
            }
        }

        &:nth-of-type(5n-3) {
            grid-column: span 3; 
            line-height: 2em;

            & .item__image {
                margin: 0 25px 0 0;
                width: 400px;
                height: 100%;
            }

            & .item__name {
                font-size: 28px;
            }

            & .item__desc, .item__price {
                font-size: 22px;
            }
        }
    }
}
</style>
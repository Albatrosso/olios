<template>
	<div class="cart container">
		<div class="cart__main">
			<div
				v-if="!products.length"
				class="cart__placeholder"
			>
				Your cart is empty :( <br /> 
				<router-link to="/catalog">
					Go shopping!
				</router-link>
			</div>
			<div
				v-else
				class="cart__items"
			>
				<cart-item
					v-for="product in products"
					:key="product.id"
					:product="product"
				/>
			</div>
			<div class="cart__footer">
				<div>
					Items: <span class="cart__price">{{ products.lenght || '0' }}</span>
				</div>
				<div class="cart__total">
					Total: <span
						class="cart__price"
						:class="{ 'cart__price--before': isPromocodeApplied }"
					>{{ total || '0' }}$</span> 
					<span
						v-if="isPromocodeApplied"
						class="cart__price"
					>{{ (total - promo) }}$</span>
				</div>
			</div>
		</div>
		<div class="cart__aside">
			<checkout-widget />
			<promocode-widget />
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component

export default class CartPage extends Vue {
    products = [
    	{
    		id: '1', 
    		name: 'red seat with pillows', 
    		price: {
    			total: 50, 
    			original: 55, 
    			promocode: 5
    		}, 
    		amount: 2, 
    		photo: 'background-image: url(\'/img/seat.png\');'
    	}
    ];
    total = '';
    promo = '';

    isPromocodeApplied = false;
};
</script>

<style lang="scss" scoped>
.cart {
    display: grid;
    grid-template-columns: 3fr 290px;
    grid-column-gap: 30px;
	position: relative;

	&__placeholder {
		font-size: 24px;
		position: relative;
		top: 50px;
	}

	&__placeholder > a {
		color: $main-color;
		display: inline-block;
		margin-top: 15px;
	}

    &__main {
		display: grid;
		grid-template-rows: auto 80px;
        background-color: $white;
        box-shadow: -1px 1px 8px 0px rgba(34, 60, 80, 0.1);
    }

	&__items {
		overflow: scroll;
	}

    &__aside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

	&__footer {
		display: flex;
		justify-content: space-between;
		padding: 25px;
		font-size: 18px;
		border-top: 1px solid $black;
	}

    &__price {
        font-weight: 800;
		margin-left: 5px;

		&--before {
			text-decoration: line-through;
			color: $grey;
		}
    }
}
</style>

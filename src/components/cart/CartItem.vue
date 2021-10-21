<template>
	<div class="cart">
		<div
			class="cart__photo"
			:style="product.photo"
		/>
		<div class="cart__name">
			{{ product.name || 'No name' }}
		</div>
		<div>
			<counter v-model="product.amount" />
		</div>
		<div class="cart__price">
			<span
				v-if="product.price.promocode"
				class="cart__price--before"
			>
				{{ product.price.original }}$
			</span>
			{{ product.price.total }}$
		</div>
		<div class="cart__delete" />
	</div>
</template>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})

export default class CartItem extends Vue {
    @Prop({ type: Object, default: () => ({}) }) product;
};
</script>

<style lang="scss" scoped>
.cart {
    padding: 15px;
    display: grid;
    grid-template-columns: 90px 3fr 2fr 2fr 1fr;
    grid-column-gap: 25px;
    border-bottom: 1px solid $light-grey;
    text-align: left;
    align-items: center;

    &__photo {
        width: 80px;
        height: 80px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    &__name {
        text-transform: uppercase;
        font-weight: 600;
    }

    &__price {
        font-weight: 600;

        &--before {
            text-decoration: line-through;
            color: $grey;
            margin-right: 5px;
        }
    }

    &__delete {
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: url('../../../public/img/icons/crossgrey.png') center;
        background-size: cover;
        justify-self: center;

        &:hover {
            opacity: .5;
        }
    }
}
</style>

<template>
	<div class="order">
		<h3>Order information</h3>
		<div class="order__main">
			<ol-input
				v-model="address.city"
				:placeholder="'Moscow'"
				:label="'City'"
			/>
			<ol-input
				v-model="address.street"
				:placeholder="'Kings Crossing St'"
				:label="'Street'"
			/>
			<ol-input
				v-model="address.house"
				:placeholder="'91'"
				:label="'House'"
			/>
			<div class="order__address">
				<ol-input
					v-model="address.floor"
					:placeholder="'15'"
					:label="'Floor'"
				/>
				<ol-input
					v-model="address.flat"
					:placeholder="'5B'"
					:label="'Flat'"
				/>
			</div>
		</div>
		<button class="btn btn-sm">
			Checkout
		</button>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class CartPage extends Vue {
    address = {
    	city: '',
    	street: '',
    	house: '',
    	floor: '',
    	flat: ''
    }
};
</script>

<style lang="scss" scoped>
.order {
    padding: 15px 25px 25px;
    text-align: left;
    background-color: $white;
    box-shadow: -1px 1px 8px 0px rgba(34, 60, 80, 0.1);
    display: grid;
    grid-row-gap: 20px;

    &__main {
        display: grid;
        grid-row-gap: 10px;
    }

    &__address {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
        margin-bottom: 10px;
    }
}
</style>

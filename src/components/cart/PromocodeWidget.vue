<template>
	<div class="promo">
		<h3>Have a promocode?</h3>
		<ol-input
			v-model="code"
			:placeholder="'Enter here'"
		/>
		<div class="promo__advert">
			<div
				v-if="!isPromoApplied"
				class="promo__text"
			>
				I don't have a promocode
			</div>
			<div v-show="isPromoApplied">
				You have 5% off!
			</div>
		</div>
		<button class="btn btn-sm">
			Apply
		</button>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class CartPage extends Vue {
    code = '';
    isPromoApplied = false;
};
</script>

<style lang="scss" scoped>
.promo {
    height: 300px;
    background: $white;
    padding: 15px 25px 25px;
    text-align: left;
    box-shadow: -1px 1px 8px 0px rgba(34, 60, 80, 0.1);
    display: grid;
    grid-template-rows: 35px 40px auto 35px;
    grid-row-gap: 10px;
    align-items: flex-start;

    &__advert {
        margin-bottom: 15px;
    }

    &__text {
        margin-bottom: 15px;
        color: $main-color;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }

        &:active {
            opacity: 0.8;
        }
    }

    &__code {
        margin-bottom: 15px;
    }
}
</style>

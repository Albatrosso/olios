<template>
	<div class="catalog-item">
		<div class="card">
			card
			<button>
				popop
			</button>
		</div>
		<div class="info__wrapper">
			<div class="info">
				ee
			</div>
			<div class="info__products">
				ee
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

@Component({})

export default class CatalogItem extends Vue {
    @Prop({ type: Object, default: () => ({}) }) product;
};
</script>

<style lang="scss" scoped>
.catalog-item {
    width: 100%;
    height: 100vh;
    background-color: $light-grey;
    display: grid;
    grid-template-columns: minmax(500px, 700px) minmax(700px, 1fr);

    .card {
        background: $white;
        box-shadow: -1px 1px 10px 0px rgba(34, 60, 80, 0.2);
        position: relative;
        z-index: 2;
    }

    .info {
        &__wrapper {
            display: grid;
            grid-template-rows: auto 300px;
        }

        &__products {
            background: $white;
            box-shadow: -1px 1px 10px 0px rgba(34, 60, 80, 0.2);
        }
    }
}
</style>
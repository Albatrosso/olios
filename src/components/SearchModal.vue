<template>
	<div class="search">
		<div class="container">
			<div class="search__wrapper">
				<ol-input
					v-model="term"
					:label="'Type product that you are looking for'"
					:placeholder="'Red seat'"
					class="search__input"
					clearable
				/>
			</div>
			<div class="search__wrapper">
				<div
					v-for="item in items"
					:key="item.name"
					class="search__item"
				>
					<div
						class="search__item-img"
						:style="item.url"
					/>
					{{ item.name }}
				</div>
			</div>
			<div class="search__wrapper font-bold">
				{{ `${result} Searched result` }}
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class HomePage extends Vue {
	result = 2;
	term = '';
	
	items = [
		{ 
			name: 'Red seat',
			url: 'background-image: url(\'/img/seat.png\');'
		},
		{ 
			name: 'Dark seat',
			url: 'background-image: url(\'/img/seatdark.png\');'
		}
	];
};
</script>

<style lang="scss" scoped>
.search {
    background: rgba(235, 235, 235, 0.95);

	.container {
		display: grid;
		grid-template-rows: 100px 80px auto;
		grid-row-gap: 80px;
		text-align: left;
	}

    &__input {
		width: 100%;
        font-size: 50px;
    }

	&__input-icon {
		width: 25px;
		height: 25px;
		background-image: url('../../public/img/icons/crossgrey.png');
		background-size: cover;
	}

	&__item {
		width: 300px;
		text-transform: uppercase;
		font-size: 35px;
		font-weight: 300;
		display: grid;
		grid-template-columns: 80px auto;
		grid-column-gap: 25px;
		align-items: center;
		justify-content: flex-start;
		cursor: pointer;

		&:hover {
			color: $main-color;
		}
	}

	&__wrapper:nth-of-type(2){
		display: grid;
		grid-template-columns: 300px 300px;
		grid-column-gap: 35px;
	}

	&__item-img {
		width: 80px;
		height: 80px;
		background-size: cover;
	}
}
</style>

<template>
	<div class="field">
		<input
			v-model="innerValue"
			class="field__input"
			type="number"
			min="0"
			max="100"
			@input="onInput($event)"
		/>
	</div>
</template>

<script>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class Counter extends Vue {
    @Prop({ default: '' }) value;

    get innerValue() {
    	return this.value;
    }

    set innerValue(value) {    
    	this.$emit('input', value);
    }

    @Emit('input')
    onInput(event = {}) {
    	let value = '';

    	if (event.target && event.target.value) {
    		value = event.target.value;
    	}

    	return value;
    }
};
</script>

<style lang="scss" scoped>
.field {
    display: inline-block;

    &__input {
       width: 100%;
       padding: 10px;
       border: none;
       border-radius: 50px;
       background-color: $light-grey;
       text-align: center;
    }
}
</style>
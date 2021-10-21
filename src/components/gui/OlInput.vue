<template>
	<div class="field">
		<div class="field__wrapper">
			<input
				v-model="innerValue"
				:value="value"
				:type="type"
				:placeholder="placeholder"
				class="field__input"
				@input="onInput($event)"
			/>
		</div>
		<span
			v-if="clearable && value"
			class="field__icon"
			@click="onClear"
		/>
		<label
			v-if="label"
			class="field__label"
		>
			{{ label }}
		</label>
	</div>
</template>

<script>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class OlInput extends Vue {
    @Prop({ default: '' }) value;
    @Prop({ type: String, default: 'text' }) type;
    @Prop({ type: String, default: '' }) placeholder;
    @Prop({ type: Boolean, default: false }) clearable;
    @Prop({ type: String, default: '' }) label;

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

    	if (!value) {
    		this.onClear();
    	}

    	return value;
    }

    @Emit('clear')
    onClear() {
    	this.innerValue = '';
    }

    @Emit('clickHandler')
    onClick() {}
};
</script>

<style lang="scss" scoped>
.field {
    display: inline-block;
    text-align: left;
    position: relative;

    &__label {
        font-size: 16px;
        color: $grey;
    }

    &__wrapper {
        position: relative;
    }

    &__input {
       width: 100%;
       padding: 10px 30px 10px 0;
       border: none;
       border-bottom: 1px solid $grey;
       background-color: transparent;
    }

    &__input::placeholder {
       color: $grey;
       text-transform: uppercase;
    }

    &__icon {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 5px;
        bottom: 55px;
        cursor: pointer;
        background: url('../../../public/img/icons/crossgrey.png') center;
        background-size: cover;

        &:hover {
            opacity: .5;
        }
    }
}
</style>
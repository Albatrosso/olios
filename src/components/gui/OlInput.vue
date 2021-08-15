<template>
	<div class="field">
		<label
			v-if="label"
			class="field__label"
		>
			{{ label }}
		</label>
		<div class="field__wrapper">
			<input
				ref="input"
				:value="value"
				:type="type"
				:placeholder="placeholder"
				class="field__input"
				@input="onInput($event)"
			/>
			<span
				class="field__icon"
				@click="onInput()"
			>
				<slot name="icon" />
			</span>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})

export default class OlInput extends Vue {
    @Prop({ default: '' }) value;
    @Prop({ type: String, default: 'text' }) type;
    @Prop({ type: String, default: '' }) placeholder;
    @Prop({ type: String, default: '' }) label;

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
    onClear() {}

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
        font-size: 14px;
        color: $grey;
        position: absolute;
        bottom: -22px;
        left: 0;
        text-transform: lowercase;
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
    }

    &__icon {
        position: absolute;
        right: -30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
}
</style>
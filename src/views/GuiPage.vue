<template>
	<div>
		<h1>
			GUI
		</h1>
		<button class="btn">
			View more
		</button>
		<div>
			<ol-input
				label="Label"
				maxLength="2"
				placeholder="Placeholder"
			>
				<template #icon>
					ico
				</template>
			</ol-input>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class GuiPage extends Vue {
	created() {}
};
</script>

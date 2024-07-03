<template>
	<div class="wrapper-person">
		<div class="" v-if="item">
			<img :src="item.img" :alt="item.description" />
			<h1 style="color: #fff" class="title">{{ item.title }}</h1>
			<p>{{ item.description }}</p>
			<div class="card-stats">
				<div
					class="one-third"
					v-for="(stat, index) in item.info"
					:key="index"
				>
					<div class="stat-value">{{ stat.value }}</div>
					<div class="stat">{{ stat.title }}</div>
				</div>
			</div>
			<div>
				<router-link to="/" class="btn btnPrimary">
					Back to home</router-link
				>
			</div>
		</div>
	</div>
</template>
<script>
import items from '@/seeders/items.json';
export default {
	data() {
		return {
			item: null,
		};
	},
	created() {
		const alias = this.$route.params.itemAlias;
		const item = items.find((el) => el.alias === alias);
		if (item) {
			this.item = item;
		} else {
			this.$router.push('/404');
		}
	},
};
</script>
<style>
.wrapper-person {
	text-align: center;
}
</style>

<template>
	<carousel
		:settings="settings"
		:items-to-show="1.5"
		:breakpoints="breakpoints"
	>
		<slide class="card__wrapper" v-for="item in items" :key="item.id">
			<Card
				:title="item.title"
				:name="item.lvl"
				:imgUrl="item.img"
				:link="item.alias"
			>
				<template v-slot:body>
					{{ item.description }}
				</template>
				<template v-slot:footer>
					<CardStats :stats="item.info"/>
				</template>
			</Card>
		</slide>

		<template #addons>
			<navigation />
		</template>
	</carousel>
</template>
<script>
import Card from '@/components/UI/Card';
import CardStats from '@/components/UI/CardStats.vue';
import items from '@/seeders/items.json';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
	components: { Card, Carousel, Slide, Navigation, CardStats },
	data() {
		return {
			items: items,
			settings: {
				itemsToShow: 2,
				wrapAround: true,
				snapAlign: 'center',
			},
			breakpoints: {
				300: {
					itemsToShow: 1,
				},
				700: {
					itemsToShow: 3,
				},
			},
		};
	},
};
</script>

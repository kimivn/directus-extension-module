import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'orders',
	name: 'Orders',
	icon: 'dashboard',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});

import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'custom',
	name: 'Custom',
	icon: 'switch_access',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});

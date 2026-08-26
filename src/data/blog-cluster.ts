import { TERNOS_SOB_MEDIDA_HUB } from './content-hubs';

const cluster = {
	pillar: {
		href: TERNOS_SOB_MEDIDA_HUB.path,
		label: TERNOS_SOB_MEDIDA_HUB.name,
		title: 'Ternos sob medida em São Paulo',
		description:
			'Guia completo de ternos bespoke full canvas em São Paulo: processo, tecidos italianos e quando vale a pena.',
	},
	articles: TERNOS_SOB_MEDIDA_HUB.spokes.map(({ href, label }) => ({ href, label })),
};

export default cluster;

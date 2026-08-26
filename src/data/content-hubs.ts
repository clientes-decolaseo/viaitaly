export interface Spoke {
	slug: string;
	href: `/${string}`;
	label: string;
}

export interface ContentHub {
	path: `/${string}`;
	name: string;
	spokes: readonly Spoke[];
}

export const TERNOS_SOB_MEDIDA_HUB: ContentHub = {
	path: '/ternos-sob-medida-sp/',
	name: 'Ternos Sob Medida SP',
	spokes: [
		{
			slug: 'bespoke-vs-made-to-measure-vs-pronta-entrega',
			href: '/blog/bespoke-vs-made-to-measure-vs-pronta-entrega/',
			label: 'Bespoke vs. Made-to-Measure vs. Prêt-à-Porter',
		},
		{
			slug: 'quanto-custa-terno-sob-medida-sao-paulo',
			href: '/blog/quanto-custa-terno-sob-medida-sao-paulo/',
			label: 'Quanto Custa um Terno Sob Medida em São Paulo',
		},
		{
			slug: 'terno-sob-medida-para-casamento',
			href: '/blog/terno-sob-medida-para-casamento/',
			label: 'Terno Sob Medida para Casamento',
		},
		{
			slug: 'como-funciona-processo-bespoke',
			href: '/blog/como-funciona-processo-bespoke/',
			label: 'Como Funciona o Processo Bespoke',
		},
		{
			slug: 'tecidos-nobres-drago-zegna-loro-piana',
			href: '/blog/tecidos-nobres-drago-zegna-loro-piana/',
			label: 'Tecidos Nobres: Drago, Zegna e Loro Piana',
		},
		{
			slug: 'costume-vs-paleto-qual-escolher',
			href: '/blog/costume-vs-paleto-qual-escolher/',
			label: 'Costume vs. Paletó: Qual Escolher',
		},
	],
};

export const CONTENT_HUBS: ContentHub[] = [TERNOS_SOB_MEDIDA_HUB];

import type { ImageMetadata } from 'astro';
import tecidosNobres from '../assets/images/home/benefits/tecidos-nobres.webp';
import sobreFoto from '../assets/images/home/sobre-foto.jpeg';
import costumesImage from '../assets/images/home/products/costumes.jpeg';
import paletosImage from '../assets/images/home/products/paletos.png';
import ternosImage from '../assets/images/home/products/ternos.jpeg';

export interface BlogCover {
	src: ImageMetadata;
	alt: string;
}

const covers: Record<string, BlogCover> = {
	'bespoke-vs-made-to-measure-vs-pronta-entrega': {
		src: ternosImage,
		alt: 'Terno sob medida em prova de alfaiataria, com alinhavos visíveis no paletó',
	},
	'como-funciona-processo-bespoke': {
		src: sobreFoto,
		alt: 'Alfaiate da Sartoria Via Italy no ateliê',
	},
	'costume-vs-paleto-qual-escolher': {
		src: paletosImage,
		alt: 'Paletó azul texturizado com camisa branca, ajuste do botão na cintura',
	},
	'quanto-custa-terno-sob-medida-sao-paulo': {
		src: costumesImage,
		alt: 'Costume sob medida em processo de ajuste no ateliê',
	},
	'tecidos-nobres-drago-zegna-loro-piana': {
		src: tecidosNobres,
		alt: 'Alfaiate apresentando tecidos nobres a um cliente no ateliê',
	},
	'terno-sob-medida-para-casamento': {
		src: ternosImage,
		alt: 'Terno sob medida em prova de alfaiataria, com alinhavos visíveis no paletó',
	},
};

const fallbackCover: BlogCover = {
	src: ternosImage,
	alt: 'Alfaiataria bespoke da Sartoria Via Italy',
};

export function getBlogCover(slug: string): BlogCover {
	return covers[slug] ?? fallbackCover;
}

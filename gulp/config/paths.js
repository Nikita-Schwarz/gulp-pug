const srcPath = 'src';
const distPath = 'build';

const paths = {
	pages: {
		src: `${srcPath}/pages/*.pug`,
		build: `${distPath}/`,
		watch: `${srcPath}/pages/**/*.pug`,
	},
	scss: {
		src: `${srcPath}/scss/styles.scss`,
		build: `${distPath}/css/`,
		watch: `${srcPath}/scss/**/*.scss`,
	},
	images: {
		src: `${srcPath}/images/**/*.{jpg,png,svg,gif,webp,webmanifest,xml,json}`,
		build: `${distPath}/images/`,
		watch: `${srcPath}/images/**/*.{jpg,png,svg,gif,webp,webmanifest,xml,json}`,
	},
	js: {
		src: `${srcPath}/js/*.js`,
		build: `${distPath}/js/`,
		watch: `${srcPath}/js/**/*.js`,
	},
	sprite: {
		src: `${srcPath}/icons/*.svg`,
		build: `${distPath}/images/`,
		watch: `${srcPath}/icons/*.svg`,
	},
	favicon: {
		src: `${srcPath}/images/*.{ico,png}`,
		build: `${distPath}/images/`,
		watch: `${srcPath}/images/*.{ico,png}`,
	},
	clean: distPath,
};

export { paths, srcPath, distPath };

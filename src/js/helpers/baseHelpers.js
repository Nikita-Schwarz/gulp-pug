export class BaseHelpers {
	static html = document.documentElement;

	/**
	 * Проверка браузера на поддержку .webp изображений
	 * (i) необходимо для корректного отображения webp из css
	 * */
	static checkWebpSupport() {
		/** Проверка поддержки webp */
		const testWebp = (callback) => {
			const webP = new Image();

			webP.onload = webP.onerror = () => callback(webP.height === 2);
			webP.src =
				'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
		};

		/** Добавление класса _webp или _no-webp для HTML */
		testWebp((support) => {
			const className = support ? 'webp' : 'no-webp';
			BaseHelpers.html.classList.add(className);

			console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
		});
	}
}

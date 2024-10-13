import browserSync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления
import ifPlugin from 'gulp-if'; // Условное ветление
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)


const plugins = {
  if: ifPlugin,
  browserSync,
  newer
};

class Logger {
	handleError(taskName) {
		return plumber({
			errorHandler: notify.onError({
				title: taskName,
				message: 'Error: <%= error.message %>',
			}),
		});
	};
}

export const logger = new Logger();
export { plugins };
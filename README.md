# Фронтенд проекта Mesto API

## Используемые технологии и решения
- React.js в качестве основной библиотеки
- React Router для маршрутизации
- JavaScript ES6+
- CSS3 для стилей
- Адаптивная верстка
- Авторизация через JWT
- PM2 для деплоя

## Адреса развернутого проекта
- IP-адрес сервера: 51.250.38.231
- Frontend: https://lostfreez.ru
- Backend: https://api.lostfreez.ru

## Инструкция по локальному развертыванию
1. Клонируйте репозиторий: `git clone git@github.com:antonElsikora/nodejs-mesto-frontend.git`
2. Установите зависимости: `npm install`
3. Создайте файл `.env` в корне проекта (см. пример в `.env.example`)
4. Для запуска в режиме разработки: `npm start`
5. Для сборки: `npm run build`
6. Для запуска собранного проекта: `npx serve -s build`

## Инструкция по деплою
1. Настройте `.env.deploy` с параметрами вашего сервера (см. пример в `.env.deploy.example`)
2. Запустите начальную настройку: `pm2 deploy ecosystem.config.js production setup`
3. Выполните деплой: `pm2 deploy production`
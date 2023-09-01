FROM node:16-alpine

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json'
COPY package*.json ./

# устанавливаем зависимости проекта
RUN yarn install --ignore-optional --frozen-lockfile --non-interactive


# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

# собираем приложение для production с минификацией.
RUN yarn run publish

#EXPOSE 3001

ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["yarn","start"]


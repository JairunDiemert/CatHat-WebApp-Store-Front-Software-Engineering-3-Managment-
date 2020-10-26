FROM node

WORKDIR /cat-hats

COPY . .

RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200

CMD ng serve --host 0.0.0.0
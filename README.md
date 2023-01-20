## Description

Groupe : **Avagliano Enzo**, **Brun-Giglio Alexandre**, **Castaner Antony**

Projet commencé de zéro !

## Avec Docker

```bash
cd proxy
npm i
cd ..

docker-compose up -d

# User service
docker-compose exec user bash
cp .env.exemple .env
php bin/console lexik:jwt:generate-keypair
composer install
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
exit

# Car service
docker-compose exec car python3 fixtures.py
```

## Installation

```bash
$ npm install
```

```bash
$ npm run lib:init
```

## Run Vitrine

```bash
$ cd vitrine
```

```bash
$ npm run dev
```

## Run Storybook

```bash
$ cd my-lib-ui
```

```bash
$ npm run storybook
```

## Run Electron

```bash
$ cd electron
$ npm i --registry https://registry.npmjs.org
$ cd ..
$ npm run lib:init
```

## Run Jest Testing

```bash
$ cd my-lib-ui
```

```bash
$ npm run test
```

## Initiatives :

- [x] RegEXP sur les email / phone input
- [x] Composant select fait à la main (à la manière Material UI)
- [x] Propriétés onClick et onChange disponnible sur tout les inputs
- [x] Script pour l'installation de lib et la mise à jours de la lib pour yalc.
- [x] Tests unitaires sur les composants

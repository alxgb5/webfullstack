## Description

Groupe : **Avagliano Enzo**, **Brun-Giglio Alexandre**, **Castaner Antony**

Projet commencé de zéro !

## Avec Docker

```bash
docker-compose up -d

docker-compose exec user bash
composer install
php bin/console doctrine:migrations:migrate
hp bin/console doctrine:fixtures:load

docker-compose exec proxy bash
npm install
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

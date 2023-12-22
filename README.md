## MOODLY

## Fonctionnalités Principales

- **Création de Questionnaires** : Vous pouvez créer des questionnaires personnalisés en ajoutant des questions pertinentes pour évaluer la santé mentale des gestionnaires d'équipe et de leurs équipes.

- **Gestion des Utilisateurs** : Vous pouvez ajouter, modifier et supprimer des utilisateurs, qu'ils soient des gestionnaires d'équipe ou des membres de l'équipe.

- **Suivi de la Santé Mentale** : L'application vous permet de suivre les réponses aux questionnaires au fil du temps, vous permettant ainsi de détecter les tendances et de prendre des mesures appropriées.

- **Rapports et Graphiques** : Vous avez accès à des rapports et des graphiques pour visualiser les données de manière claire et informative.

## Prérequis

Avant de commencer à utiliser l'application, assurez-vous d'avoir les éléments suivants installés :

- Node.js
- NPM (Node Package Manager)
- Strapi


## Installation


3. Installez les dépendances du frontend (Vue.js).

```bash
npm install
```

4. Installez les dépendances du backend (Strapi).

```bash
cd ../my-project
npm install
```

5. Configurez votre base de données dans le fichier `server/config/database.js`.

6. Créez les tables de base de données nécessaires.

```bash
npx strapi db:create
npx strapi db:migrate
```

7. Démarrez le serveur Strapi.

```bash
npm run develop
```

8. Démarrez le frontend Vue.js.

```bash
cd ../my-project
npm run serve
```

L'application devrait maintenant être accessible à l'adresse http://localhost:8080/.

## Utilisation

1. Connectez-vous à l'application en utilisant vos informations d'identification.

2. Créez des questionnaires de santé mentale.

3. Ajoutez des utilisateurs (gestionnaires d'équipe et membres de l'équipe).

4. Distribuez les questionnaires aux utilisateurs.

5. Suivez les réponses aux questionnaires et analysez les données.


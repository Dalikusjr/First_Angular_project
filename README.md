# 🎬 Films — Angular Application

<p align="center">
  <img src="https://img.shields.io/badge/Angular-20-red" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue" />
  <img src="https://img.shields.io/badge/Status-Learning%20Project-success" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

<p align="center">
  Application Angular moderne pour la <strong>gestion et la consultation de films</strong>,
  avec authentification, protection des routes et architecture modulaire.
</p>

---

## 📚 Sommaire

- [Présentation](#-présentation)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Arborescence](#-arborescence)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Scripts](#-scripts)
- [Tests](#-tests)
- [Build](#-build)
- [Auteur](#-auteur)
- [Licence](#-licence)

---

## 📖 Présentation

**Films** est une application web développée avec **Angular 20** permettant :
- La consultation publique des films.
- La gestion complète des films via un espace administrateur.
- La sécurisation des routes grâce aux **Guards**.

Le projet applique les **bonnes pratiques Angular** : modules, routing par module, services, séparation des responsabilités.

---

## ✨ Fonctionnalités

### 👤 Visiteur
- Accueil
- Liste des films
- Détails d’un film
- Page À propos

### 🔐 Authentification
- Connexion utilisateur
- Protection des routes (`AuthGuard`)

### 🛠️ Administrateur
- Ajouter un film
- Modifier un film
- Supprimer un film
- Lister les films

### ❌ Erreurs
- Page 404 personnalisée

---

## 🧰 Technologies

- **Angular 20**
- **TypeScript**
- **HTML5 / CSS3**
- Angular Router
- Services Angular
- Guards
- Architecture modulaire
- FireStore

---

## 🧩 Architecture


AppModule
│
├── VisiteurModule → accès public (consultation)
├── AuthModule     → authentification & sécurité
├── AdminModule    → gestion des films (CRUD)
├── Services       → logique métier
└── Shared         → modèles partagés
Cette architecture modulaire permet :

- Une meilleure maintenabilité.
- Une séparation claire des responsabilités.
- Une évolutivité simplifiée du projet.

---

## 📂 Arborescence
```
src/app
├── admin                    # Espace administrateur
│   ├── ajouter-film
│   ├── modifier-film
│   ├── lister-films
│   ├── details-film
│   ├── admin.ts
│   ├── admin-module.ts
│   └── admin-routing-module.ts
│
├── auth                     # Authentification
│   ├── login
│   ├── auth.ts
│   ├── auth-guard.ts
│   ├── auth-module.ts
│   └── auth-routing-module.ts
│
├── visiteur                 # Espace public
│   ├── home-visiteur
│   ├── detail-film
│   ├── apropos
│   ├── visiteur.ts
│   ├── visiteur-module.ts
│   └── visiteur-routing-module.ts
│
├── services                 # Services métier
│   └── films.ts
│
├── shared                   # Modèles partagés
│   └── models
│
├── notfound                 # Page 404
│   └── notfound.ts
│
├── app-routing-module.ts
└── app-module.ts
```
---

## ⚙️ Installation

### Prérequis
- **Node.js** ≥ 18
- **Angular CLI** ≥ 20

### Installation
```bash
git clone [https://github.com/votre-nom/films-angular.git](https://github.com/votre-nom/films-angular.git)
cd films-angular
npm install
```
---

## ▶️ Utilisation

Démarrer le serveur de développement :

```bash
ng serve
```
Accéder à l’application via l'URL : [http://localhost:4200](http://localhost:4200)

---

## 📜 Scripts

| Commande | Description |
| :--- | :--- |
| `ng serve` | Lancer le serveur de développement |
| `ng build` | Compiler le projet pour la production |
| `ng test` | Lancer les tests unitaires |
| `ng e2e` | Lancer les tests de bout en bout |
| `ng generate component nom` | Créer un nouveau composant |

---

## 🧪 Tests

```bash
ng test
ng e2e
```
---

## 🏗️ Build

```bash
ng build
```
Les fichiers de production seront générés dans le dossier `dist/`.

---

## Configuration Firebase personnelle pour le test

Pour tester l'application, vous devez créer votre propre projet Firebase et obtenir les **configs Firestore**. Voici comment faire :

### 1️⃣ Créer un projet Firebase

1. Rendez-vous sur [https://console.firebase.google.com/](https://console.firebase.google.com/)  
2. Cliquez sur **Ajouter un projet** et suivez les étapes.  
3. Activez **Firestore** et **Authentication (si besoin)** dans votre projet.

### 2️⃣ Obtenir la configuration du projet

1. Dans votre projet Firebase, allez dans **Paramètres > Général > Vos applications > Web App**.  
2. Copiez l’objet de configuration, qui ressemble à ceci :

```ts
export const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

```
3. Coller dans src/environments/environment.ts

## 👨‍💻 Auteur

**Mohamed Ali Bettaieb** – Étudiant en Informatique
*Projet académique Angular*

---

## 📄 Licence

Ce projet est sous licence **MIT**. Libre d’utilisation, de modification et de distribution.

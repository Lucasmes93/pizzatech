# 🍕 PizzaTech — Gestion de restaurant de pizzas

![CI Backend](https://github.com/Lucasmes93/pizzatech/actions/workflows/node-backend.yml/badge.svg)

PizzaTech est une application fullstack permettant la gestion d’un menu de pizzas, à destination d’un restaurant. Il s’agit d’un projet solo intégrant un frontend moderne avec React et un backend Node.js connecté à une base SQLite via Prisma.

---

## 🚀 Démo

- 🎯 Page d’accueil listant les pizzas disponibles
- 🛠️ Interface admin pour ajouter, modifier et supprimer des pizzas
- ✅ API RESTful + tests automatisés avec GitHub Actions

---

## 🧱 Stack technique

### Frontend
- React + Vite
- Sass Modules
- Routing via `react-router-dom`

### Backend
- Node.js + Express
- Prisma (ORM)
- SQLite (base de données locale)
- Supertest + `node:test` (tests)

### CI/CD
- GitHub Actions pour :
  - Lancer les tests à chaque `push` ou `PR`
  - Valider automatiquement la qualité du backend

---

## 📁 Arborescence du projet

```

pizzatech/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── prisma/
│   │   └── schema.prisma
│   ├── tests/
│   │   └── pizza.test.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── public/
│   ├── package.json
│   └── .env
└── .github/
└── workflows/
└── node-backend.yml

````

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Lucasmes93/pizzatech.git
cd pizzatech
````

### 2. Lancer le backend

```bash
cd backend
pnpm install
pnpm exec prisma db push
pnpm run dev
```

> Le serveur Express sera accessible sur `http://localhost:4000`

### 3. Lancer le frontend

```bash
cd frontend
pnpm install
pnpm run dev
```

> L’application React sera accessible sur `http://localhost:5173`

---

## 🔐 Fichiers `.env`

### backend/.env

```env
DATABASE_URL="file:./dev.db"
```

### frontend/.env

```env
VITE_API_URL=http://localhost:4000/api
```

---

## 🧪 Tests (Backend)

```bash
cd backend
pnpm run test
```

> Utilise `node:test` + `supertest` pour tester les routes de l'API

---

## 🤖 Intégration continue

Le fichier [`node-backend.yml`](.github/workflows/node-backend.yml) permet :

* L'installation des dépendances backend
* La génération de la base de données (via Prisma)
* Le lancement des tests

Badge de build :
![CI Backend](https://github.com/Lucasmes93/pizzatech/actions/workflows/node-backend.yml/badge.svg)

---

## 📸 Aperçu visuel

### Accueil

* Affichage de toutes les pizzas disponibles
* Header moderne avec navigation

### Admin

* Formulaire pour ajouter une pizza
* Possibilité de modifier ou supprimer
* Liste mise à jour dynamiquement après chaque action

---

## 👨‍💻 Auteur

**Lucas MESSIA DOLIVEUX**
Projet solo dans le cadre d’une évaluation de gestion de projet fullstack.

---


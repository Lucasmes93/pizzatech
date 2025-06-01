### 📄 `README.md`

```markdown
# 🍕 PizzaTech — Gestion d’un restaurant de pizzas

Projet réalisé en solo dans le cadre de l’évaluation technique du module Dev Fullstack.  
Ce projet simule une application de gestion de pizzeria avec un frontend React et un backend Node.js.

---

## 🚀 Fonctionnalités

- 🖥️ Affichage des pizzas disponibles (client)
- 🔧 Interface d'administration (CRUD pizzas)
- 📦 API REST sécurisée avec Express
- 📊 Base de données SQLite + Prisma ORM
- ✅ Tests automatisés avec Jest + Supertest
- ⚙️ Intégration continue via GitHub Actions

---

## 🧱 Technologies utilisées

| Frontend       | Backend           | Outils                 |
|----------------|-------------------|------------------------|
| React + Vite   | Node.js + Express | GitHub Actions         |
| Axios          | Prisma ORM        | pnpm / npm             |
| React Router   | SQLite            | dotenv, Jest, Supertest|

---

## 📁 Arborescence

```

PizzaTech/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── middleware/
│   ├── tests/
│   ├── prisma/
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   └── .env.example
├── .github/
│   └── workflows/
├── README.md
└── package.json

````

---

## 🛠️ Installation du projet

### 📦 Prérequis
- Node.js 20+
- pnpm (`npm i -g pnpm`)
- SQLite (intégré)

### 🔧 Backend

```bash
cd backend
cp .env.example .env
pnpm install
pnpm exec prisma db push
pnpm run dev
````

### 🖥️ Frontend

```bash
cd frontend
cp .env.example .env
pnpm install
pnpm run dev
```

---

## 🧪 Tests

```bash
cd backend
pnpm run test
```

Tests réalisés avec Jest + Supertest (CRUD sur /api/pizzas)

---

## 🔁 Intégration continue

GitHub Actions exécute automatiquement :

* `pnpm install`
* `pnpm exec prisma db push`
* `pnpm run test`

Workflow situé dans `.github/workflows/node-backend.yml`

---

## 🔌 Variables d’environnement

### 📄 backend/.env.example

```env
PORT=4000
DATABASE_URL="file:./dev.db"
```

### 📄 frontend/.env.example

```env
VITE_API_URL=http://localhost:4000/api
```

---

## 📸 Aperçu

> (Ajoute ici des captures d’écran ou un GIF de l’interface Home + Admin)

---

## 🎥 Démo vidéo

📺 Lien vers la démonstration : \[à insérer ici]

---

## 🧑 Auteur

Lucas MESSIA DOLIVEUX
Projet personnel — 2025

```

---

Souhaites-tu que je te génère aussi une version avec des captures d’écran (`README illustré`) ? Ou tu veux que je t’aide à filmer la vidéo démo ?
```

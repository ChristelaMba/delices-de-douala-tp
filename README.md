# Délices de Douala — Système de notation de restaurants

> Application Angular de notation de restaurants camerounais à 5 étoiles.
> Projet réalisé dans le cadre d'Angular Talent Lab 2026 — TP entre J7 et J8 (input/output sur 3 niveaux).

🔗 **Démo en ligne** : [https://delices-de-douala-tp-rho.vercel.app](https://delices-de-douala-tp-rho.vercel.app)

## Technologies utilisées

- Angular 22
- TypeScript 5.9+
- Signals (`signal()`, `computed()`)
- `input()` / `output()` (Standalone Components)
- CSS Grid + Flexbox (responsive Desktop / Tablette / Mobile)

## Fonctionnalités

- ✅ Grille de 6 restaurants camerounais (Douala)
- ✅ Système de notation par étoiles cliquables avec effet hover
- ✅ Compteur en temps réel dans le header (« ★ X / 6 restaurants notés »)
- ✅ Le compteur ne double pas lors d'un re-vote
- ✅ Communication parent-enfant sur 3 niveaux via `input()` / `output()`
- ✅ Mise à jour immuable des signals (`.update()` + `.map()`, sans mutation directe)
- ✅ Responsive Desktop / Tablette / Mobile

### Bonus implémentés

- ✅ Note moyenne affichée dans le header
- ✅ Retrait de note (reclic sur l'étoile déjà sélectionnée)
- ✅ Tri des restaurants par note décroissante
- ✅ Filtre toggle : afficher uniquement les restaurants notés ≥ 4 étoiles
- ✅ Animation au survol des étoiles (`transform: scale`)

## Architecture des composants

```
App
├── Header
│   ↑ [ratedCount, averageRating]
│
└── RestaurantList
    ↑ (restaurantRated)
    │
    └── RestaurantCard × 6
        ↑ (restaurantRated)
        ↓ [restaurant]
        │
        └── StarRating
            ↑ (ratingChanged)
            ↓ [currentRating]
```

## Lancer le projet en local

```bash
git clone https://github.com/ChristelaMba/delices-de-douala-tp.git
cd delices-de-douala-tp
npm install
npm start
```

Ouvrir [http://localhost:8080](http://localhost:8080).

## Auteur

AKOUDJOU MBA Noëlly Christela — Apprenante Angular Talent Lab 2026 — Cohorte Douala

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

# Captures
## Affichage sur Desktop
<img width="896" height="561" alt="desktop1" src="https://github.com/user-attachments/assets/aff0e997-e688-43db-8e19-b2f2c3b3955e" />
<img width="897" height="559" alt="desktop2" src="https://github.com/user-attachments/assets/769e0fbe-3b70-4e50-bc75-b2dd1d273c1b" />
<img width="897" height="563" alt="desktop3" src="https://github.com/user-attachments/assets/868c961a-3f17-42a5-b855-4a5c17f64114" />

## Affichage sur mobile
<img width="217" height="468" alt="mobile1" src="https://github.com/user-attachments/assets/d70bd659-5d35-4ab5-9763-f413555e9d33" />
<img width="218" height="467" alt="mobile2" src="https://github.com/user-attachments/assets/c0bf1baa-6fc3-4478-a096-3e2dd9522d44" />
<img width="218" height="467" alt="mobile3" src="https://github.com/user-attachments/assets/7550dead-8485-47b4-a4e7-05d09f0f083f" />

## Auteur

AKOUDJOU MBA Noëlly Christela — Apprenante Angular Talent Lab 2026 — Cohorte Douala
